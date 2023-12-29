import React from 'react';

const MetricDetails = ({ metric }) => {
  return (
    <div>
      <h2>{metric.name}</h2>
      <p>{metric.description}</p>
    </div>
  );
};

export default MetricDetails;
