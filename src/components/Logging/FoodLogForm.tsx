import React, { useState } from 'react';
import { NutritionLog } from '../../types/logging';

interface FoodLogFormProps {
  onSubmit: (log: Omit<NutritionLog, 'id'>) => void;
}

const FoodLogForm: React.FC<FoodLogFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    meal: '',
    food: '',
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      date: new Date().toISOString().split('T')[0],
      meal: formData.meal,
      food: formData.food,
      calories: Number(formData.calories),
      protein: Number(formData.protein),
      carbs: Number(formData.carbs),
      fats: Number(formData.fats),
    });
    setFormData({
      meal: '',
      food: '',
      calories: '',
      protein: '',
      carbs: '',
      fats: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Meal Type</label>
          <select
            value={formData.meal}
            onChange={(e) => setFormData({ ...formData, meal: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Select meal</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Food Item</label>
          <input
            type="text"
            value={formData.food}
            onChange={(e) => setFormData({ ...formData, food: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Calories</label>
          <input
            type="number"
            value={formData.calories}
            onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Protein (g)</label>
          <input
            type="number"
            value={formData.protein}
            onChange={(e) => setFormData({ ...formData, protein: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Carbs (g)</label>
          <input
            type="number"
            value={formData.carbs}
            onChange={(e) => setFormData({ ...formData, carbs: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Fats (g)</label>
          <input
            type="number"
            value={formData.fats}
            onChange={(e) => setFormData({ ...formData, fats: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Log Food
      </button>
    </form>
  );
};

export default FoodLogForm;