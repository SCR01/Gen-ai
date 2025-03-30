
import React from "react";
import { Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface QueryStatusProps {
  loading: boolean;
  error: string | null;
}

const QueryStatus: React.FC<QueryStatusProps> = ({ loading, error }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[100px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
        <div className="space-y-2 text-center">
          <p className="font-medium">Processing your query...</p>
          <p className="text-sm text-muted-foreground">
            Analyzing data and generating insights
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return null;
};

export default QueryStatus;
