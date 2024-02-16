export interface Recipe {
  id: string;
  name: string;
  image?: string;
  instructions: string;
  ingredients?: string[]; // Making ingredients optional
}
