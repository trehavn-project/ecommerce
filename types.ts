
export interface Product {
  id: string;
  name: string;
  sku: string;
  price: string;
  tagline: string;
  description: string;
  imageUrl: string;
}

export interface Review {
  id: string;
  text: string;
  author: string;
  location: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
