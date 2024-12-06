import React from 'react';

interface BMIResultProps {
  bmi: number;
  category: string;
}

const BMIResult: React.FC<BMIResultProps> = ({ bmi, category }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Results</h2>
      <p className="text-lg">BMI: {bmi}</p>
      <p className="text-lg">Category: {category}</p>
    </div>
  );
};

export default BMIResult;