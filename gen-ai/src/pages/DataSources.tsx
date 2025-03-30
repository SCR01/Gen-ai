
import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Database, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const dataSources = [
  {
    name: "Customer Database",
    type: "PostgreSQL",
    status: "Connected",
    lastSync: "Today at 09:15 AM",
  },
  {
    name: "Product Catalog",
    type: "MySQL",
    status: "Connected",
    lastSync: "Yesterday at 11:30 PM",
  },
  {
    name: "Sales Transactions",
    type: "SQL Server",
    status: "Connected",
    lastSync: "Today at 03:20 AM",
  }
];

const DataSources = () => {
  return (
    <Provider store={store}>
      <DashboardLayout>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-primary">
              Data Sources
            </h1>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Data Source</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataSources.map((source, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors duration-200">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-primary" />
                      <CardTitle>{source.name}</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      {source.type}
                    </Badge>
                  </div>
                  <CardDescription>Last synced: {source.lastSync}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between">
                  <Badge variant="secondary" className="bg-green-500/10 text-green-400 hover:bg-green-500/20">
                    {source.status}
                  </Badge>
                  <Button variant="ghost" size="sm">Configure</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </Provider>
  );
};

export default DataSources;
