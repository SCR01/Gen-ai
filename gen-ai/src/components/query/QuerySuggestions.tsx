
import React from "react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { executeQuery } from "@/store/querySlice";

const suggestions = [
  "Show monthly revenue trend for 2023",
  "Compare sales by product category",
  "What were our top 5 customers last quarter?",
  "Show conversion rates by marketing channel"
];

const QuerySuggestions = () => {
  const dispatch = useDispatch();

  const handleSuggestionClick = (suggestion: string) => {
    // @ts-ignore - This is a TypeScript error we'll fix properly in the future
    dispatch(executeQuery(suggestion));
  };

  return (
    <div className="flex flex-col gap-2">
      {suggestions.map((suggestion, index) => (
        <Button
          key={index}
          variant="outline"
          className="justify-start h-auto py-2 px-3 text-left"
          onClick={() => handleSuggestionClick(suggestion)}
        >
          {suggestion}
        </Button>
      ))}
    </div>
  );
};

export default QuerySuggestions;
