import React, { useState, useEffect } from 'react';
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

interface ProgressData {
  date: string;
  weight: number;
  exercise: boolean;
  mealPlanFollowed: boolean;
}

const ProgressTracker: React.FC = () => {
  const [progressData, setProgressData] = useState<ProgressData[]>([]);
  const [weight, setWeight] = useState<string>('');

  const addProgress = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: ProgressData = {
      date: new Date().toISOString().split('T')[0],
      weight: Number(weight),
      exercise: true,
      mealPlanFollowed: true,
    };
    setProgressData([...progressData, newEntry]);
    setWeight('');
  };

  const chartData = {
    labels: progressData.map(d => d.date),
    datasets: [
      {
        label: 'Weight Progress',
        data: progressData.map(d => d.weight),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Progress Tracker</h2>
      <form onSubmit={addProgress} className="mb-6">
        <div className="flex gap-4">
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter today's weight"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add Entry
          </button>
        </div>
      </form>
      <div className="h-64">
        {progressData.length > 0 && <Line data={chartData} />}
      </div>
    </div>
  );
};