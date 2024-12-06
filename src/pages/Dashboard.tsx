import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import BMIResult from '../components/BMI/BMIResult';
import MealPlanDisplay from '../components/MealPlanDisplay';
import ExercisePlanDisplay from '../components/ExercisePlanDisplay';
import ProgressTracker from '../components/Progress/ProgressTracker';
import LoggingSection from '../components/Logging/LoggingSection';
import { generateMealPlan } from '../utils/mealPlanner';
import { generateExercisePlan } from '../utils/exercisePlanner';

interface LocationState {
  bmi: number;
  category: string;
}

const Dashboard: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const [showMealPlan, setShowMealPlan] = useState(false);
  const [showExercisePlan, setShowExercisePlan] = useState(false);

  if (!state?.bmi || !state?.category) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Your Fitness Dashboard
        </h1>

        <BMIResult bmi={state.bmi} category={state.category} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <button
              onClick={() => setShowMealPlan(!showMealPlan)}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors mb-4"
            >
              {showMealPlan ? 'Hide Meal Plan' : 'Show Meal Plan'}
            </button>
            {showMealPlan && <MealPlanDisplay mealPlan={generateMealPlan(state.category)} />}
          </div>
          <div>
            <button
              onClick={() => setShowExercisePlan(!showExercisePlan)}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors mb-4"
            >
              {showExercisePlan ? 'Hide Exercise Plan' : 'Show Exercise Plan'}
            </button>
            {showExercisePlan && <ExercisePlanDisplay exercisePlan={generateExercisePlan(state.category)} />}
          </div>
        </div>

        <LoggingSection />
        <ProgressTracker />
      </div>
    </div>
  );
};

export default Dashboard;