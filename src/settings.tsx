export interface Extra {
  id: string;
  name: string;
  price: number;
}

export const API_URL =
  "https://n3kqqck7lf.execute-api.us-east-1.amazonaws.com/default";

export const AVAILABLE_EXTRAS: Extra[] = [
  { id: "1", name: "ham", price: 2 },
  { id: "2", name: "onion", price: 1 },
  { id: "3", name: "bacon", price: 2 },
  { id: "4", name: "cheese", price: 1.4 },
  { id: "5", name: "green peppers", price: 1.2 },
  { id: "6", name: "mushrooms", price: 1.2 },
];
