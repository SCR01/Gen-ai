
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { BarChart3, Home, Search, Database, Settings, History } from "lucide-react";

const DashboardSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-3">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">GenAI Analytics</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={currentPath === "/"}
                >
                  <Link to="/" className="flex items-center gap-3">
                    <Home className="h-5 w-5" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={currentPath === "/query-builder"}
                >
                  <Link to="/query-builder" className="flex items-center gap-3">
                    <Search className="h-5 w-5" />
                    <span>Query Builder</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={currentPath === "/history"}
                >
                  <Link to="/history" className="flex items-center gap-3">
                    <History className="h-5 w-5" />
                    <span>Query History</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={currentPath === "/data-sources"}
                >
                  <Link to="/data-sources" className="flex items-center gap-3">
                    <Database className="h-5 w-5" />
                    <span>Data Sources</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={currentPath === "/settings"}
                >
                  <Link to="/settings" className="flex items-center gap-3">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;
