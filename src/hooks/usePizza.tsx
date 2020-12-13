import { useEffect, useState } from "react";
import { API_URL } from "../settings";

export interface Pizza {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

const usePizza = (id: string): [string, boolean, Pizza | undefined] => {
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [pizza, setPizza] = useState<Pizza | undefined>();

  useEffect(() => {
    setError("");
    setLoading(false);
    fetch(`${API_URL}/pizza/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setPizza(response);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return [error, isLoading, pizza];
};

export default usePizza;
