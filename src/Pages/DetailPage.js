import React from 'react';
import { useSelector } from 'react-redux';
import MetricDetails from '../Components/MetricDetails';

const DetailPage = ({ match }) => {
  const { metricId } = match.params;
  const selectedMetric = useSelector((state) => state.metrics.selectedMetric);
  return (
    <div>
      <h1>Metric Details</h1>
      {selectedMetric ? <MetricDetails metric={selectedMetric} /> : <p>Metric not found</p>}
    </div>
  );
};
export default DetailPage;
