
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QueryInput from "./QueryInput";
import QueryHistory from "./QueryHistory";
import QuerySuggestions from "./QuerySuggestions";

const QueryPanel = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Ask Your Data</CardTitle>
        </CardHeader>
        <CardContent>
          <QueryInput />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Suggested Queries</CardTitle>
        </CardHeader>
        <CardContent>
          <QuerySuggestions />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Queries</CardTitle>
        </CardHeader>
        <CardContent>
          <QueryHistory />
        </CardContent>
      </Card>
    </div>
  );
};

export default QueryPanel;
