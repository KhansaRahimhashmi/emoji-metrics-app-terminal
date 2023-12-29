import { configureStore } from '@reduxjs/toolkit';
import metricsReducer from './Features/metrics/metricsSlice';


const store = configureStore({
  reducer: {
    metrics: metricsReducer,
  },
});

export default store;
