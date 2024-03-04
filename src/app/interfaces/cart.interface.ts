import Product from "./product.interface";

export interface cartItem{
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  cuantity: number;
}
export interface Cart {
    items: Array<cartItem>;
}