import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  metrics: [],
  selectedMetric: null,
};

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    setMetrics: (state, action) => {
      state.metrics = action.payload;
    },
    selectMetric: (state, action) => {
      state.selectedMetric = action.payload;
    },
  },
});

export const { setMetrics, selectMetric } = metricsSlice.actions;
export default metricsSlice.reducer;
