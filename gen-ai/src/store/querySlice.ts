import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { mockQueryProcessor } from '@/services/mockQueryProcessor';
import { ChartType } from '@/components/visualization/ChartDisplay';

export interface QueryHistoryItem {
  query: string;
  timestamp: number;
}

export interface QueryResult {
  data: any[];
  recommendedChart: ChartType;
  summary: string;
}

interface QueryState {
  currentQuery: string | null;
  history: QueryHistoryItem[];
  loading: boolean;
  error: string | null;
  result: QueryResult | null;
}

const initialState: QueryState = {
  currentQuery: null,
  history: [],
  loading: false,
  error: null,
  result: null,
};

export const executeQuery = createAsyncThunk(
  'query/execute',
  async (query: string) => {
    // We use a mock service to simulate API call
    return await mockQueryProcessor(query);
  }
);

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    clearResults: (state) => {
      state.result = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(executeQuery.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.currentQuery = action.meta.arg;
      })
      .addCase(executeQuery.fulfilled, (state, action: PayloadAction<QueryResult>) => {
        state.loading = false;
        state.result = action.payload;
        // Add to history
        state.history.unshift({
          query: state.currentQuery!,
          timestamp: Date.now(),
        });
        // Keep only the last 10 queries
        if (state.history.length > 10) {
          state.history = state.history.slice(0, 10);
        }
      })
      .addCase(executeQuery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred while processing your query';
      });
  },
});

export const { clearResults } = querySlice.actions;
export default querySlice.reducer;
