
import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RootState } from "@/store";
import ChartDisplay from "./ChartDisplay";
import DataTable from "./DataTable";
import QueryStatus from "./QueryStatus";
import { BarChart2, Table } from "lucide-react";

const VisualizationPanel = () => {
  const { currentQuery, loading, result, error } = useSelector(
    (state: RootState) => state.query
  );

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>
            {currentQuery ? `Results: "${currentQuery}"` : "Analysis Results"}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <QueryStatus loading={loading} error={error} />
        
        {result && (
          <Tabs defaultValue="chart" className="mt-4">
            <TabsList>
              <TabsTrigger value="chart" className="flex items-center gap-2">
                <BarChart2 className="h-4 w-4" />
                Chart
              </TabsTrigger>
              <TabsTrigger value="table" className="flex items-center gap-2">
                <Table className="h-4 w-4" />
                Table
              </TabsTrigger>
            </TabsList>
            <TabsContent value="chart" className="mt-4">
              <ChartDisplay data={result.data} type={result.recommendedChart} />
            </TabsContent>
            <TabsContent value="table" className="mt-4">
              <DataTable data={result.data} />
            </TabsContent>
          </Tabs>
        )}
        
        {!result && !loading && !error && (
          <div className="h-[400px] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <BarChart2 className="h-16 w-16 mx-auto mb-4 opacity-20" />
              <p className="text-lg">Ask a question to see data visualizations</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VisualizationPanel;
