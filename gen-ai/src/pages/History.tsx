
import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QueryHistory from "@/components/query/QueryHistory";
import { Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  
  return (
    <Provider store={store}>
      <DashboardLayout>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-primary mb-8">
            Query History
          </h1>
          
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Recent Queries</span>
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => navigate("/query-builder")}
                  className="flex items-center gap-2"
                >
                  <Search className="h-4 w-4" />
                  <span>New Query</span>
                </Button>
              </CardHeader>
              <CardContent>
                <QueryHistory />
              </CardContent>
            </Card>
          </div>
        </div>
      </DashboardLayout>
    </Provider>
  );
};

export default History;
