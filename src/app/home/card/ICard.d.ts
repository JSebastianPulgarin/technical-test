declare namespace ICard {
  export interface Product {
    name: string;
    description: string;
    price: number;
    image: string;
  }
  
  export interface Props {
    data: Product[];
  }
}

export { ICard };