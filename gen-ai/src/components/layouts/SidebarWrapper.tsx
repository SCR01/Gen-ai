
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";

interface SidebarWrapperProps {
  children: React.ReactNode;
}

const SidebarWrapper: React.FC<SidebarWrapperProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="group/sidebar-wrapper flex min-h-svh w-full">
        {children}
      </div>
    </SidebarProvider>
  );
};

export default SidebarWrapper;
