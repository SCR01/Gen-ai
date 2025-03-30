
import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import SidebarWrapper from "./SidebarWrapper";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <SidebarWrapper>
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </SidebarWrapper>
  );
};

export default DashboardLayout;
