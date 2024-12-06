import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ProgressChartProps {
  dates: string[];
  weights: number[];
}

const ProgressChart: React.FC<ProgressChartProps> = ({ dates, weights }) => {
  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Weight Progress',
        data: weights,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="h-64">
      <Line data={chartData} />
    </div>
  );
};

export default ProgressChart;