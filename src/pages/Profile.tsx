import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Mail, User as UserIcon } from "lucide-react";

const Profile = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [contentCount, setContentCount] = useState(0);

  useEffect(() => { if (!loading && !user) navigate("/auth"); }, [user, loading, navigate]);
  useEffect(() => {
    const fetch = async () => {
      if (!user) return;
      const { count } = await supabase.from("content_history").select("*", { count: "exact", head: true }).eq("user_id", user.id);
      setContentCount(count || 0);
    };
    fetch();
  }, [user]);

  if (loading) return (
    <div className="min-h-screen bg-background"><Navbar />
      <div className="container mx-auto px-4 py-16 text-center"><p>Loading...</p></div>
    </div>
  );

  const joinDate = user?.created_at ? new Date(user.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "Unknown";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl font-bold">Profile</h1>
          <Button className="rounded-full" onClick={() => navigate("/dashboard/settings")}>Edit Profile</Button>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border bg-card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <UserIcon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold">{user?.user_metadata?.full_name || "User"}</h2>
                <p className="text-sm text-muted-foreground">Free Plan — All tools included</p>
              </div>
            </div>
            <div className="space-y-4 border-t pt-6">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">{user?.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Member Since</p>
                  <p className="text-sm font-medium">{joinDate}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-8">
            <h2 className="font-display text-lg font-semibold mb-5">Usage</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border p-6 text-center">
                <p className="font-display text-3xl font-bold text-primary">{contentCount}</p>
                <p className="mt-1 text-sm text-muted-foreground">Content Generated</p>
              </div>
              <div className="rounded-xl border p-6 text-center">
                <p className="font-display text-3xl font-bold text-primary">∞</p>
                <p className="mt-1 text-sm text-muted-foreground">Remaining Uses</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <h2 className="font-display text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start rounded-lg" onClick={() => navigate("/dashboard/history")}>View Content History</Button>
              <Button variant="outline" className="w-full justify-start rounded-lg" onClick={() => navigate("/dashboard/settings")}>Account Settings</Button>
              <Button variant="outline" className="w-full justify-start rounded-lg" onClick={() => navigate("/dashboard")}>Back to Dashboard</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
