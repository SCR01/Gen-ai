
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { executeQuery } from "@/store/querySlice";
import { RootState, AppDispatch } from "@/store";

const QueryHistory = () => {
  const { history } = useSelector((state: RootState) => state.query);
  // Use AppDispatch instead of the default dispatch type
  const dispatch = useDispatch<AppDispatch>();

  const handleRerunQuery = (query: string) => {
    dispatch(executeQuery(query));
  };

  if (!history.length) {
    return (
      <div className="text-center p-4 text-muted-foreground">
        <Clock className="mx-auto h-8 w-8 opacity-50 mb-2" />
        <p>No queries yet</p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-[240px]">
      <div className="space-y-2">
        {history.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-between p-2 rounded-md hover:bg-primary/10 group transition-colors duration-200"
          >
            <div className="flex-1">
              <p className="text-sm font-medium truncate text-primary-foreground">{item.query}</p>
              <p className="text-xs text-muted-foreground">
                {new Date(item.timestamp).toLocaleString()}
              </p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleRerunQuery(item.query)}
            >
              <ArrowUpRight className="h-4 w-4 text-primary" />
            </Button>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default QueryHistory;
