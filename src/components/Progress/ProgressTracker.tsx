import React, { useState } from 'react';
import ProgressForm from './ProgressForm';
import ProgressChart from './ProgressChart';
import { ProgressData } from '../../types/progress';

const ProgressTracker: React.FC = () => {
  const [progressData, setProgressData] = useState<ProgressData[]>([]);

  const handleAddProgress = (weight: number) => {
    const newEntry: ProgressData = {
      date: new Date().toISOString().split('T')[0],
      weight,
      exercise: true,
      mealPlanFollowed: true,
    };
    setProgressData([...progressData, newEntry]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Progress Tracker</h2>
      <ProgressForm onSubmit={handleAddProgress} />
      {progressData.length > 0 && (
        <ProgressChart
          dates={progressData.map(d => d.date)}
          weights={progressData.map(d => d.weight)}
        />
      )}
    </div>
  );
};

export default ProgressTracker;