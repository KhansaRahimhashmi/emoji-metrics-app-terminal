import React from 'react';

const MetricList = ({ metrics, onMetricClick }) => {
  return (
    <ul>
      {metrics.map((metric) => (
        <li key={metric.id} onClick={() => onMetricClick(metric.id)}>
          {metric.name}
        </li>
      ))}
    </ul>
  );
};

export default MetricList;
