import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, Copy } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import { toolsConfig } from "@/lib/toolsConfig";
import { Link } from "react-router-dom";

interface HistoryItem {
  id: string;
  tool_type: string;
  input_data: any;
  output_data: any;
  created_at: string;
}

const History = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchHistory(); }, []);

  const fetchHistory = async () => {
    try {
      const { data, error } = await supabase.from("content_history").select("*").order("created_at", { ascending: false }).limit(50);
      if (error) throw error;
      setHistory(data || []);
    } catch (error: any) {
      console.error("Error fetching history:", error);
      toast.error("Failed to load history");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("content_history").delete().eq("id", id);
      if (error) throw error;
      setHistory(prev => prev.filter(item => item.id !== id));
      toast.success("Deleted");
    } catch { toast.error("Failed to delete"); }
  };

  const getToolName = (toolType: string) => toolsConfig.find(t => t.id === toolType)?.title || toolType;

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="flex min-h-screen items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <div className="border-b bg-card">
          <div className="container mx-auto px-6 py-6">
            <h1 className="font-display text-3xl font-bold">Generation History</h1>
            <p className="mt-1 text-muted-foreground">View and manage your past AI generations</p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8">
          {history.length === 0 ? (
            <div className="rounded-xl border bg-card p-16 text-center">
              <p className="text-muted-foreground">No generation history yet</p>
              <Button className="mt-4 rounded-full" asChild>
                <Link to="/dashboard">Start Creating</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {history.map((item) => (
                <div key={item.id} className="rounded-xl border bg-card p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="mb-2 flex items-center gap-2 flex-wrap">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {getToolName(item.tool_type)}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(item.created_at).toLocaleString()}
                        </span>
                      </div>
                      <div className="mb-3">
                        <p className="text-xs font-semibold text-muted-foreground mb-1">Input:</p>
                        <p className="text-sm truncate">
                          {Object.values(item.input_data).map(v => String(v).slice(0, 80)).join(" · ")}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-1">Output:</p>
                        <p className="whitespace-pre-wrap text-sm text-muted-foreground line-clamp-3">
                          {item.output_data.content?.slice(0, 300)}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1.5 shrink-0">
                      <Button variant="outline" size="sm" onClick={() => { navigator.clipboard.writeText(item.output_data.content); toast.success("Copied!"); }}>
                        <Copy className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDelete(item.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default History;
