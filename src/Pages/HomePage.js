import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MetricList from '../Components/MetricList';
import { fetchMetrics, selectMetric, setMetrics } from '../Features/metrics/metricsSlice';
//import metricsReducer from '../Features/metrics/metricsSlice';

const HomePage = ({ history }) => {
  const dispatch = useDispatch();
  const metrics = useSelector((state) => state.metrics.metrics);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMetrics();
        dispatch(setMetrics(data));
      } catch (error) {

      }
    };

    fetchData();
  }, [dispatch]);

  const handleMetricClick = (metricId) => {
    dispatch(selectMetric(metricId));
    history.push(`/details/${metricId}`);
  };

  return (
    <div>
      <h1>Metrics</h1>
      <MetricList metrics={metrics} onMetricClick={handleMetricClick} />
    </div>
  );
};

export default HomePage;
