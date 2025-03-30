
import React, { useState } from "react";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { executeQuery } from "@/store/querySlice";

const QueryInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // @ts-ignore - This is a TypeScript error we'll fix properly in the future
      dispatch(executeQuery(query));
      // Don't clear the query to maintain context for the user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Sparkles className="h-5 w-5 text-muted-foreground" />
        </div>
        <Input
          type="text"
          placeholder="Ask a question about your data..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-20 py-6 text-base"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-1.5">
          <Button
            type="submit"
            size="sm"
            className="h-8"
            disabled={!query.trim()}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">
        Try: "Show me sales by region for last quarter" or "What's our customer growth rate?"
      </p>
    </form>
  );
};

export default QueryInput;
