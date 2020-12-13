import { useEffect, useState } from "react";
import { Pizza } from "./usePizza";
import { API_URL } from "../settings";

const usePizzas = (): [string, boolean, Pizza[]] => {
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  useEffect(() => {
    setError("");
    setLoading(false);
    fetch(`${API_URL}/pizza`)
      .then((response) => response.json())
      .then((response) => {
        setPizzas(response);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [error, isLoading, pizzas];
};

export default usePizzas;
