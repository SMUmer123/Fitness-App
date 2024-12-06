import React from 'react';
import BMIForm from './BMIForm';
import { calculateBMI, getBMICategory } from '../../utils/bmiCalculator';

interface BMICalculatorProps {
  onBMICalculated: (bmi: number, category: string) => void;
}

const BMICalculator: React.FC<BMICalculatorProps> = ({ onBMICalculated }) => {
  const handleFormSubmit = (age: number, height: number, weight: number) => {
    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);
    onBMICalculated(bmi, category);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>
      <BMIForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default BMICalculator;