export interface NutritionLog {
  id: string;
  date: string;
  meal: string;
  food: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export interface ExerciseLog {
  id: string;
  date: string;
  exercise: string;
  duration: number;
  intensity: 'Low' | 'Medium' | 'High';
  caloriesBurned: number;
}