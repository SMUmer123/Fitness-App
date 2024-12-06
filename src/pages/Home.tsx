import React from 'react';
import { useNavigate } from 'react-router-dom';
import BMICalculator from '../components/BMI/BMICalculator';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleBMICalculated = (bmi: number, category: string) => {
    navigate('/dashboard', { state: { bmi, category } });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Let's Start Your Fitness Journey
        </h1>
        <p className="text-center text-gray-600 text-lg mb-8">
          Calculate your BMI to get personalized meal and exercise plans
        </p>
        <BMICalculator onBMICalculated={handleBMICalculated} />
      </div>
    </div>
  );
};

export default Home;