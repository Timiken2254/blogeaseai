import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Settings = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => { if (!loading && !user) navigate("/auth"); }, [user, loading, navigate]);
  useEffect(() => { if (user) setFullName(user.user_metadata?.full_name || ""); }, [user]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(true);
    const { error } = await supabase.auth.updateUser({ data: { full_name: fullName } });
    error ? toast.error(error.message) : toast.success("Profile updated!");
    setUpdating(false);
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) { toast.error("Passwords do not match"); return; }
    if (newPassword.length < 6) { toast.error("Password must be at least 6 characters"); return; }
    setUpdating(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) { toast.error(error.message); } else { toast.success("Password updated!"); setNewPassword(""); setConfirmPassword(""); }
    setUpdating(false);
  };

  if (loading) return (
    <div className="min-h-screen bg-background"><Navbar />
      <div className="container mx-auto px-4 py-16 text-center"><p>Loading...</p></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="font-display text-3xl font-bold mb-8">Settings</h1>

        <div className="space-y-6">
          <div className="rounded-xl border bg-card p-6">
            <h2 className="font-display text-lg font-semibold mb-1">Profile Information</h2>
            <p className="text-sm text-muted-foreground mb-5">Update your personal information</p>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={user?.email || ""} disabled className="bg-muted" />
                <p className="text-xs text-muted-foreground">Email cannot be changed. Contact support for assistance.</p>
              </div>
              <Button type="submit" disabled={updating} className="rounded-full">
                {updating ? "Updating..." : "Update Profile"}
              </Button>
            </form>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <h2 className="font-display text-lg font-semibold mb-1">Change Password</h2>
            <p className="text-sm text-muted-foreground mb-5">Update your account password</p>
            <form onSubmit={handleUpdatePassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter new password" minLength={6} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm new password" minLength={6} />
              </div>
              <Button type="submit" disabled={updating} className="rounded-full">
                {updating ? "Updating..." : "Change Password"}
              </Button>
            </form>
          </div>

          <div className="rounded-xl border border-destructive/30 bg-card p-6">
            <h2 className="font-display text-lg font-semibold text-destructive mb-1">Danger Zone</h2>
            <p className="text-sm text-muted-foreground mb-5">Irreversible actions for your account</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">Delete Account</p>
                <p className="text-xs text-muted-foreground">Permanently delete your account and all data</p>
              </div>
              <Button variant="destructive" size="sm" className="rounded-full" onClick={() => toast.error("Please contact support@blogease.ai to delete your account")}>
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
