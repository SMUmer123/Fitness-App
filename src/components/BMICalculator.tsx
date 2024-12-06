import React, { useState } from 'react';
import { calculateBMI, getBMICategory } from '../utils/bmiCalculator';

interface BMICalculatorProps {
  onBMICalculated: (bmi: number, category: string) => void;
}

const BMICalculator: React.FC<BMICalculatorProps> = ({ onBMICalculated }) => {
  const [age, setAge] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const bmi = calculateBMI(Number(weight), Number(height));
    const category = getBMICategory(bmi);
    onBMICalculated(bmi, category);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>
      <form onSubmit={handleCalculate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Calculate BMI
        </button>
      </form>
    </div>
  );
};