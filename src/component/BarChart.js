import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    if (data.length === 0) return;

    const labels = data.map(item => item.naics_group);
    const counts = data.map(item => item.effective_count);

    const ctx = chartContainer.current.getContext('2d');

    if (chartInstance) {
      // Destroy the previous chart instance
      chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'No. of business that are active',
            data: counts,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'No. of business that are active'
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: context => {
                const totalCount = data[context.dataIndex].total_count;
                const activeCount = data[context.dataIndex].active_count;
                const closedCount = data[context.dataIndex].closed_count;

                return ` Total businesses registered: ${totalCount}\nActive till now: ${activeCount}\nClosed businesses: ${closedCount}`;
              }
            }
          }
        }
      }
    });

    // Clean up function
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return (
    <div style={{height: '60%', width: '70%'}}>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default BarChart;
