import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import { FileText, History, Settings, Sparkles, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  
  const menuItems = [
    { title: "Tools", url: "/dashboard", icon: Sparkles },
    { title: "History", url: "/dashboard/history", icon: History },
    { title: "Profile", url: "/dashboard/profile", icon: User },
    { title: "Settings", url: "/dashboard/settings", icon: Settings },
  ];

  return (
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
          </SidebarContent>
        </Sidebar>

        <main className="flex-1">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 px-6">
            <SidebarTrigger />
            <div className="flex-1" />
            <Button size="sm" variant="outline">
              Upgrade to Pro
            </Button>
          </header>

          <div className="p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold">AI Tools</h1>
              <p className="text-muted-foreground">
                Select a tool to start creating amazing content
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Blog Generator",
                  description: "Generate complete blog posts from a topic",
                  icon: "📝",
                },
                {
                  title: "Title Creator",
                  description: "Craft compelling headlines that drive clicks",
                  icon: "✨",
                },
                {
                  title: "SEO Meta Tags",
                  description: "Create optimized meta descriptions",
                  icon: "🔍",
                },
                {
                  title: "Idea Generator",
                  description: "Never run out of content ideas",
                  icon: "💡",
                },
                {
                  title: "Content Rewriter",
                  description: "Refresh and improve existing content",
                  icon: "🔄",
                },
                {
                  title: "Keyword Finder",
                  description: "Discover related keywords for SEO",
                  icon: "🎯",
                },
              ].map((tool, index) => (
                <Card key={index} className="group transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 text-4xl">{tool.icon}</div>
                    <CardTitle>{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Use Tool</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
