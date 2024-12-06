export interface MealPlan {
  breakfast: string[];
  lunch: string[];
  dinner: string[];
  snacks: string[];
}

export const generateMealPlan = (bmiCategory: string): MealPlan => {
  const plans: Record<string, MealPlan> = {
    'Underweight': {
      breakfast: ['Oatmeal with nuts and fruits', 'Protein smoothie', 'Eggs with whole grain toast'],
      lunch: ['Chicken sandwich with avocado', 'Quinoa bowl with legumes', 'Tuna pasta'],
      dinner: ['Salmon with rice', 'Lean beef stir-fry', 'Chicken with sweet potato'],
      snacks: ['Mixed nuts', 'Protein bars', 'Fruit with peanut butter']
    },
    'Normal weight': {
      breakfast: ['Greek yogurt with berries', 'Whole grain toast with eggs', 'Smoothie bowl'],
      lunch: ['Mixed salad with grilled chicken', 'Turkey wrap', 'Buddha bowl'],
      dinner: ['Grilled fish with vegetables', 'Tofu stir-fry', 'Lean protein with quinoa'],
      snacks: ['Apple with almonds', 'Carrot sticks with hummus', 'Greek yogurt']
    },
    'Overweight': {
      breakfast: ['Protein smoothie', 'Egg white omelet', 'Overnight oats'],
      lunch: ['Grilled chicken salad', 'Vegetable soup', 'Quinoa bowl'],
      dinner: ['Steamed fish with vegetables', 'Turkey breast with greens', 'Lentil curry'],
      snacks: ['Celery with hummus', 'Mixed berries', 'Low-fat yogurt']
    },
    'Obese': {
      breakfast: ['Green smoothie', 'Egg whites with spinach', 'Steel-cut oats'],
      lunch: ['Large green salad', 'Vegetable soup with lean protein', 'Chickpea bowl'],
      dinner: ['Grilled chicken with vegetables', 'Fish with salad', 'Tofu and vegetable stir-fry'],
      snacks: ['Cucumber slices', 'Apple slices', 'Vegetable sticks']
    }
  };

  return plans[bmiCategory] || plans['Normal weight'];
};