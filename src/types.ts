export interface FoodProps {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export interface EditingFoodProps {
  food: FoodProps;
  editModalOpen: boolean;
}
