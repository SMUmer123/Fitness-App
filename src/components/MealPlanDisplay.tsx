import React from 'react';
import { MealPlan } from '../types/plans';

interface MealPlanDisplayProps {
  mealPlan: MealPlan;
}

const MealPlanDisplay: React.FC<MealPlanDisplayProps> = ({ mealPlan }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Meal Plan</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-blue-600">Breakfast</h3>
          <ul className="list-disc pl-5">
            {mealPlan.breakfast.map((meal, index) => (
              <li key={index}>{meal}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-600">Lunch</h3>
          <ul className="list-disc pl-5">
            {mealPlan.lunch.map((meal, index) => (
              <li key={index}>{meal}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-600">Dinner</h3>
          <ul className="list-disc pl-5">
            {mealPlan.dinner.map((meal, index) => (
              <li key={index}>{meal}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-600">Snacks</h3>
          <ul className="list-disc pl-5">
            {mealPlan.snacks.map((snack, index) => (
              <li key={index}>{snack}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MealPlanDisplay;