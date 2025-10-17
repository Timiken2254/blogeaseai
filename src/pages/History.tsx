import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const { data, error } = await supabase
        .from("content_history")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(50);

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
      const { error } = await supabase
        .from("content_history")
        .delete()
        .eq("id", id);

      if (error) throw error;
      
      setHistory(prev => prev.filter(item => item.id !== id));
      toast.success("Deleted successfully");
    } catch (error: any) {
      console.error("Error deleting:", error);
      toast.error("Failed to delete");
    }
  };

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    toast.success("Copied to clipboard!");
  };

  const getToolName = (toolType: string) => {
    const tool = toolsConfig.find(t => t.id === toolType);
    return tool?.title || toolType;
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="flex min-h-screen items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[#F9FAFB]">
        <div className="border-b bg-card">
          <div className="container mx-auto px-6 py-6">
            <h1 className="text-3xl font-bold">Generation History</h1>
            <p className="text-muted-foreground">View and manage your past AI generations</p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8">
          {history.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No generation history yet</p>
              <Button className="mt-4" asChild>
                <Link to="/dashboard">Start Creating</Link>
              </Button>
            </Card>
          ) : (
            <div className="space-y-4">
              {history.map((item) => (
                <Card key={item.id} className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="rounded bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                          {getToolName(item.tool_type)}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {new Date(item.created_at).toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium text-muted-foreground">Input:</p>
                        <p className="text-sm">
                          {Object.entries(item.input_data).map(([key, value]) => (
                            <span key={key}>
                              {String(value).slice(0, 100)}
                              {String(value).length > 100 ? "..." : ""}
                            </span>
                          ))}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Output:</p>
                        <p className="whitespace-pre-wrap text-sm">
                          {item.output_data.content?.slice(0, 300)}
                          {item.output_data.content?.length > 300 ? "..." : ""}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopy(item.output_data.content)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default History;
