import React from 'react';
import { ExercisePlan } from '../types/plans';

interface ExercisePlanDisplayProps {
  exercisePlan: ExercisePlan;
}

const ExercisePlanDisplay: React.FC<ExercisePlanDisplayProps> = ({ exercisePlan }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Exercise Plan</h2>
      <p className="text-lg mb-4">Recommended frequency: {exercisePlan.frequency}</p>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-blue-600">Cardio Exercises</h3>
          <ul className="list-disc pl-5">
            {exercisePlan.cardio.map((exercise, index) => (
              <li key={index}>{exercise}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-600">Strength Training</h3>
          <ul className="list-disc pl-5">
            {exercisePlan.strength.map((exercise, index) => (
              <li key={index}>{exercise}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-600">Flexibility & Mobility</h3>
          <ul className="list-disc pl-5">
            {exercisePlan.flexibility.map((exercise, index) => (
              <li key={index}>{exercise}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExercisePlanDisplay;