import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu,
  SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger,
} from "@/components/ui/sidebar";
import { Feather, History, LogOut, Settings, Sparkles, User, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";
import { toolsConfig } from "@/lib/toolsConfig";
import { Input } from "@/components/ui/input";

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
              <div className="mb-8">
                <h1 className="font-display text-3xl font-bold">AI Tools</h1>
                <p className="mt-1 text-muted-foreground">
                  Select a tool to start creating content
                </p>
              </div>

              <div className="mb-6 relative max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

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
                      {filteredTools(category).map((tool) => (
                        <Link
                          key={tool.id}
                          to={`/dashboard/tool/${tool.id}`}
                          className="group flex flex-col rounded-xl border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                        >
                          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <tool.icon className="h-5 w-5" />
                          </div>
                          <h3 className="font-display text-base font-semibold">{tool.title}</h3>
                          <p className="mt-1 flex-1 text-sm text-muted-foreground">{tool.subtitle}</p>
                        </Link>
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
