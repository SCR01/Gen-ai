
import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import QueryPanel from "@/components/query/QueryPanel";
import VisualizationPanel from "@/components/visualization/VisualizationPanel";
import { Provider } from "react-redux";
import { store } from "@/store";

const Index = () => {
  return (
    <Provider store={store}>
      <DashboardLayout>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-primary mb-8">
            Gen AI Analytics Dashboard
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <QueryPanel />
            </div>
            <div className="lg:col-span-2">
              <VisualizationPanel />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </Provider>
  );
};

export default Index;
