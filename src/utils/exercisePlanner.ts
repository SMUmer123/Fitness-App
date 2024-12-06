export interface ExercisePlan {
  cardio: string[];
  strength: string[];
  flexibility: string[];
  frequency: string;
}

export const generateExercisePlan = (bmiCategory: string): ExercisePlan => {
  const plans: Record<string, ExercisePlan> = {
    'Underweight': {
      cardio: ['Light jogging', 'Swimming', 'Cycling'],
      strength: ['Bodyweight exercises', 'Light resistance training', 'Push-ups'],
      flexibility: ['Basic stretching', 'Yoga', 'Mobility exercises'],
      frequency: '3-4 times per week'
    },
    'Normal weight': {
      cardio: ['Running', 'HIIT workouts', 'Swimming'],
      strength: ['Weight training', 'Bodyweight exercises', 'Resistance bands'],
      flexibility: ['Yoga', 'Dynamic stretching', 'Pilates'],
      frequency: '4-5 times per week'
    },
    'Overweight': {
      cardio: ['Brisk walking', 'Swimming', 'Stationary bike'],
      strength: ['Circuit training', 'Resistance training', 'Bodyweight exercises'],
      flexibility: ['Stretching', 'Yoga', 'Joint mobility'],
      frequency: '5-6 times per week'
    },
    'Obese': {
      cardio: ['Walking', 'Water aerobics', 'Recumbent bike'],
      strength: ['Light resistance training', 'Chair exercises', 'Wall push-ups'],
      flexibility: ['Gentle stretching', 'Chair yoga', 'Range of motion exercises'],
      frequency: 'Daily, starting with 15-20 minutes'
    }
  };

  return plans[bmiCategory] || plans['Normal weight'];
};