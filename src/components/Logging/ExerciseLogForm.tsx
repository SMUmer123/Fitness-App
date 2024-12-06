import React, { useState } from 'react';
import { ExerciseLog } from '../../types/logging';

interface ExerciseLogFormProps {
  onSubmit: (log: Omit<ExerciseLog, 'id'>) => void;
}

const ExerciseLogForm: React.FC<ExerciseLogFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    exercise: '',
    duration: '',
    intensity: '',
    caloriesBurned: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      date: new Date().toISOString().split('T')[0],
      exercise: formData.exercise,
      duration: Number(formData.duration),
      intensity: formData.intensity as 'Low' | 'Medium' | 'High',
      caloriesBurned: Number(formData.caloriesBurned),
    });
    setFormData({
      exercise: '',
      duration: '',
      intensity: '',
      caloriesBurned: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Exercise</label>
        <input
          type="text"
          value={formData.exercise}
          onChange={(e) => setFormData({ ...formData, exercise: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
          <input
            type="number"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Intensity</label>
          <select
            value={formData.intensity}
            onChange={(e) => setFormData({ ...formData, intensity: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Select intensity</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Calories Burned</label>
        <input
          type="number"
          value={formData.caloriesBurned}
          onChange={(e) => setFormData({ ...formData, caloriesBurned: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Log Exercise
      </button>
    </form>
  );
};

export default ExerciseLogForm;