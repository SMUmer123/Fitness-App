import React, { useState } from 'react';

interface ProgressFormProps {
  onSubmit: (weight: number) => void;
}

const ProgressForm: React.FC<ProgressFormProps> = ({ onSubmit }) => {
  const [weight, setWeight] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(Number(weight));
    setWeight('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-4">
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter today's weight"
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Add Entry
        </button>
      </div>
    </form>
  );
};

export default ProgressForm;