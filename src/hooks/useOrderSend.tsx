import { useState } from "react";
import { API_URL } from "../settings";

const useOrderSend = (): [string, boolean, (data: Object) => void, boolean] => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const send = (data: Object) => {
    setError("");
    setLoading(true);
    setSuccess(false);

    fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        setSuccess(true);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return [error, isLoading, send, success];
};

export default useOrderSend;
