import React from 'react';
import { Bubble } from 'react-chartjs-2';

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: [{
      label: 'Street Names',
      data: data.map(item => ({
        x: Math.random() * 100,  // Random x-coordinate
        y: Math.random() * 100,  // Random y-coordinate
        r: item.total_count / 5, // Adjust the radius size based on total_count
        full_street_name: item.full_street_name, // Include full_street_name in the data
        total_count: item.total_count, // Include total_count in the data
        active_count: item.active_count
      })),
      backgroundColor: 'rgba(255, 99, 132, 0.6)', // Adjust the bubble color
    }]
  };

  const options = {
    scales: {
      x: { display: false }, // Hide x-axis
      y: { display: false }, // Hide y-axis
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const item = context.dataset.data[context.dataIndex];
            return `${item.full_street_name} (Total Count: ${item.total_count}, Active Count: ${item.active_count})`;
          }
        }
      }
    }
  };

  return <Bubble data={chartData} options={options} />;
};

export default BubbleChart;

