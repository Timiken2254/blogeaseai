import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu,
  SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger,
} from "@/components/ui/sidebar";
import { Feather, History, LogOut, Settings, Sparkles, User, Search, TrendingUp, Zap, Clock, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";
import { toolsConfig } from "@/lib/toolsConfig";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { formatDistanceToNow } from "date-fns";

const Dashboard = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { title: "Tools", url: "/dashboard", icon: Sparkles },
    { title: "History", url: "/dashboard/history", icon: History },
    { title: "Profile", url: "/dashboard/profile", icon: User },
    { title: "Settings", url: "/dashboard/settings", icon: Settings },
  ];

  const categories = ["All", ...Array.from(new Set(toolsConfig.map(t => t.category)))];

  const filteredTools = (category: string) => {
    let tools = category === "All" ? toolsConfig : toolsConfig.filter(t => t.category === category);
    if (searchQuery) {
      tools = tools.filter(t =>
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return tools;
  };

  const firstName = user?.email?.split("@")[0] ?? "there";

  const heroStats = [
    { icon: Sparkles, label: "Tools available", value: toolsConfig.length },
    { icon: TrendingUp, label: "Categories", value: categories.length - 1 },
    { icon: Zap, label: "Plan", value: "Unlimited" },
  ];

  return (
    <ProtectedRoute>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <Sidebar>
            <SidebarContent>
              <div className="flex h-16 items-center border-b px-6">
                <Link to="/" className="flex items-center gap-2">
                  <Feather className="h-5 w-5 text-primary" />
                  <span className="font-display text-lg font-bold">BlogEase AI</span>
                </Link>
              </div>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {menuItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                          <Link to={item.url}>
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <div className="mt-auto border-t p-4">
                <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground" onClick={signOut}>
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            </SidebarContent>
          </Sidebar>

          <main className="flex-1 bg-background">
            <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card/80 backdrop-blur-xl px-6">
              <SidebarTrigger />
              <div className="flex-1" />
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </header>

            <div className="p-6 md:p-8">
              {/* Animated welcome hero */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative mb-8 overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/10 via-card to-card p-6 md:p-8"
              >
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                    <Sparkles className="h-3 w-3 text-primary" />
                    Welcome back
                  </div>
                  <h1 className="mt-4 font-display text-3xl font-bold capitalize md:text-4xl">
                    Hi {firstName}, ready to <span className="italic text-primary">create</span>?
                  </h1>
                  <p className="mt-2 max-w-xl text-muted-foreground">
                    Pick a tool below to draft, optimize, or repurpose your next great post.
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-3 md:max-w-xl">
                    {heroStats.map((s, i) => (
                      <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                        className="rounded-xl border bg-background/60 p-3 backdrop-blur-sm"
                      >
                        <s.icon className="h-4 w-4 text-primary" />
                        <p className="mt-2 font-display text-lg font-bold leading-none">{s.value}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-6 relative max-w-md"
              >
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </motion.div>

              <Tabs defaultValue="All" className="w-full">
                <TabsList className="mb-6 flex-wrap h-auto gap-1">
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category} className="whitespace-nowrap text-xs">
                      {category} ({filteredTools(category).length})
                    </TabsTrigger>
                  ))}
                </TabsList>

                {categories.map((category) => (
                  <TabsContent key={category} value={category}>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {filteredTools(category).map((tool, index) => (
                        <motion.div
                          key={tool.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.4) }}
                          whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                          <Link
                            to={`/dashboard/tool/${tool.id}`}
                            className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-shadow duration-300 hover:border-primary/30 hover:shadow-lg"
                          >
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <motion.div
                              whileHover={{ rotate: -6, scale: 1.08 }}
                              transition={{ type: "spring", stiffness: 300, damping: 15 }}
                              className="relative mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                            >
                              <tool.icon className="h-5 w-5" />
                            </motion.div>
                            <h3 className="relative font-display text-base font-semibold">{tool.title}</h3>
                            <p className="relative mt-1 flex-1 text-sm text-muted-foreground">{tool.subtitle}</p>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    {filteredTools(category).length === 0 && (
                      <div className="py-16 text-center text-muted-foreground">
                        No tools found matching your search.
                      </div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  );
};

export default Dashboard;
