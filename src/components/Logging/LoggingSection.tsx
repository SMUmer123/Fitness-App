import React, { useState } from 'react';
import { NutritionLog, ExerciseLog } from '../../types/logging';
import FoodLogForm from './FoodLogForm';
import ExerciseLogForm from './ExerciseLogForm';

const LoggingSection: React.FC = () => {
  const [foodLogs, setFoodLogs] = useState<NutritionLog[]>([]);
  const [exerciseLogs, setExerciseLogs] = useState<ExerciseLog[]>([]);
  const [activeTab, setActiveTab] = useState<'food' | 'exercise'>('food');

  const handleFoodLog = (log: Omit<NutritionLog, 'id'>) => {
    const newLog: NutritionLog = {
      ...log,
      id: Date.now().toString(),
    };
    setFoodLogs([...foodLogs, newLog]);
  };

  const handleExerciseLog = (log: Omit<ExerciseLog, 'id'>) => {
    const newLog: ExerciseLog = {
      ...log,
      id: Date.now().toString(),
    };
    setExerciseLogs([...exerciseLogs, newLog]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Daily Logging</h2>
      
      <div className="flex mb-4">
        <button
          className={`flex-1 py-2 px-4 ${
            activeTab === 'food'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('food')}
        >
          Food Log
        </button>
        <button
          className={`flex-1 py-2 px-4 ${
            activeTab === 'exercise'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('exercise')}
        >
          Exercise Log
        </button>
      </div>

      {activeTab === 'food' ? (
        <div>
          <FoodLogForm onSubmit={handleFoodLog} />
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Today's Food Log</h3>
            {foodLogs.map((log) => (
              <div key={log.id} className="bg-gray-50 p-3 rounded-md mb-2">
                <p className="font-medium">{log.food}</p>
                <p className="text-sm text-gray-600">
                  {log.meal} - {log.calories} calories
                </p>
                <p className="text-sm text-gray-600">
                  P: {log.protein}g | C: {log.carbs}g | F: {log.fats}g
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <ExerciseLogForm onSubmit={handleExerciseLog} />
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Today's Exercise Log</h3>
            {exerciseLogs.map((log) => (
              <div key={log.id} className="bg-gray-50 p-3 rounded-md mb-2">
                <p className="font-medium">{log.exercise}</p>
                <p className="text-sm text-gray-600">
                  {log.duration} minutes - {log.intensity} intensity
                </p>
                <p className="text-sm text-gray-600">
                  Calories burned: {log.caloriesBurned}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggingSection;