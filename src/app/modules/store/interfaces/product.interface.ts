export interface IProduct {
  id: string,
  data: {
    title: string,
    category: string,
    price: number,
    employee: string,
    description: string,
    reviews: string[];
  };
}