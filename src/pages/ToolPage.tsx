import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, Download, Loader2, Sparkles, ArrowLeft } from "lucide-react";
import { toolsConfig } from "@/lib/toolsConfig";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";

const ToolPage = () => {
  const { toolId } = useParams();
  const tool = toolsConfig.find(t => t.id === toolId);
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  if (!tool) return <Navigate to="/dashboard" replace />;

  const handleInputChange = (name: string, value: string) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error("Please sign in to use this tool");

      const prompt = Object.entries(inputs).map(([key, value]) => `${key}: ${value}`).join("\n");
      const { data, error } = await supabase.functions.invoke("generate-content", {
        body: { toolType: tool.id, prompt, additionalData: inputs },
        headers: { Authorization: `Bearer ${session.access_token}` },
      });
      if (error) throw error;
      setOutput(data.content);
      toast.success("Content generated!");
    } catch (error: any) {
      console.error("Generation error:", error);
      toast.error(error.message || "Failed to generate content");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => { navigator.clipboard.writeText(output); toast.success("Copied!"); };
  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `${tool.id}-output.txt`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url); toast.success("Downloaded!");
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <div className="border-b bg-card">
          <div className="container mx-auto px-6 py-6">
            <Button variant="ghost" size="sm" className="mb-4" asChild>
              <Link to="/dashboard"><ArrowLeft className="mr-2 h-4 w-4" />Back to Dashboard</Link>
            </Button>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <tool.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold">{tool.title}</h1>
                <p className="text-sm text-muted-foreground">{tool.subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Input */}
            <div className="rounded-xl border bg-card p-6">
              <h2 className="mb-6 font-display text-lg font-semibold">Input</h2>
              <div className="space-y-4">
                {tool.inputFields.map((field) => (
                  <div key={field.name} className="space-y-2">
                    <Label htmlFor={field.name}>{field.label}</Label>
                    {field.type === "textarea" ? (
                      <Textarea id={field.name} placeholder={field.placeholder} rows={field.rows || 4} value={inputs[field.name] || ""} onChange={(e) => handleInputChange(field.name, e.target.value)} className="resize-none" />
                    ) : field.type === "select" ? (
                      <Select value={inputs[field.name] || ""} onValueChange={(v) => handleInputChange(field.name, v)}>
                        <SelectTrigger><SelectValue placeholder={field.placeholder} /></SelectTrigger>
                        <SelectContent>{field.options?.map((o) => (<SelectItem key={o} value={o}>{o}</SelectItem>))}</SelectContent>
                      </Select>
                    ) : (
                      <Input id={field.name} type="text" placeholder={field.placeholder} value={inputs[field.name] || ""} onChange={(e) => handleInputChange(field.name, e.target.value)} />
                    )}
                  </div>
                ))}
                <Button className="w-full rounded-full" size="lg" onClick={handleGenerate} disabled={loading}>
                  {loading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Generating...</>) : (<><Sparkles className="mr-2 h-4 w-4" />Generate</>)}
                </Button>
              </div>
            </div>

            {/* Output */}
            <div className="rounded-xl border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold">Output</h2>
                {output && (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleCopy}><Copy className="h-4 w-4" /></Button>
                    <Button variant="outline" size="sm" onClick={handleDownload}><Download className="h-4 w-4" /></Button>
                    <Button variant="outline" size="sm" onClick={() => { setOutput(""); toast.success("Cleared"); }}>Clear</Button>
                  </div>
                )}
              </div>
              <div className="min-h-[400px] rounded-lg border bg-muted/20 p-5">
                {output ? (
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">{output}</div>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
                    <Sparkles className="mb-4 h-12 w-12 opacity-30" />
                    <p className="font-display">Your generated content will appear here</p>
                    <p className="mt-2 text-sm">Fill in the inputs and click Generate</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {tool.examples.length > 0 && (
            <div className="mt-6 rounded-xl border bg-card p-6">
              <h3 className="mb-4 font-display font-semibold">Examples</h3>
              <div className="flex flex-wrap gap-2">
                {tool.examples.map((example, i) => (
                  <Button key={i} variant="outline" size="sm" className="rounded-full" onClick={() => { const f = tool.inputFields[0]; if (f) handleInputChange(f.name, example); }}>
                    {example}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default ToolPage;
