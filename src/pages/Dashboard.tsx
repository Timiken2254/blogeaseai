import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { FileText, History, LogOut, Settings, Sparkles, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";
import { toolsConfig } from "@/lib/toolsConfig";

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

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(toolsConfig.map(t => t.category)))];
  
  // Filter tools by search
  const filteredTools = (category: string) => {
    let tools = category === "All" 
      ? toolsConfig 
      : toolsConfig.filter(t => t.category === category);
    
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
                  <FileText className="h-6 w-6 text-primary" />
                  <span className="text-lg font-bold">BlogEase AI</span>
                </Link>
              </div>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {menuItems.map((item) => {
                      const isActive = location.pathname === item.url;
                      return (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild isActive={isActive}>
                            <Link to={item.url}>
                              <item.icon className="h-4 w-4" />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <div className="mt-auto border-t p-4">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start gap-2" 
                  onClick={signOut}
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            </SidebarContent>
          </Sidebar>

          <main className="flex-1 bg-[#F9FAFB]">
            <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 px-6">
              <SidebarTrigger />
              <div className="flex-1" />
              <Button size="sm">
                $5.99/month
              </Button>
            </header>

            <div className="p-6">
              <div className="mb-8">
                <h1 className="text-3xl font-bold">AI Tools</h1>
                <p className="text-muted-foreground">
                  Welcome back, {user?.email}! Select a tool to start creating amazing content
                </p>
              </div>

              {/* Search Bar */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full max-w-md rounded-lg border bg-card px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Category Tabs */}
              <Tabs defaultValue="All" className="w-full">
                <TabsList className="mb-6 flex-wrap h-auto">
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category} className="whitespace-nowrap">
                      {category} ({filteredTools(category).length})
                    </TabsTrigger>
                  ))}
                </TabsList>

                {categories.map((category) => (
                  <TabsContent key={category} value={category}>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {filteredTools(category).map((tool) => (
                        <Card key={tool.id} className="group transition-all hover:shadow-lg">
                          <CardHeader>
                            <div className="mb-2 inline-flex rounded-lg bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                              <tool.icon className="h-5 w-5" />
                            </div>
                            <CardTitle className="text-lg">{tool.title}</CardTitle>
                            <CardDescription>{tool.subtitle}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Button className="w-full" asChild>
                              <Link to={`/dashboard/tool/${tool.id}`}>Use Tool</Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    {filteredTools(category).length === 0 && (
                      <div className="py-12 text-center text-muted-foreground">
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
