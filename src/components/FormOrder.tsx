import { useEffect, useState } from "react";
import MultiSelect from "./MultiSelect";
import Price from "./Price";
import useOrderSend from "../hooks/useOrderSend";
import { Extra, AVAILABLE_EXTRAS } from "../settings";

interface Props {
  id: string;
  price: number;
}

const FormOrder = ({ id, price }: Props) => {
  const [validationError, setValidationError] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [priceTotal, setPriceTotal] = useState(price);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [error, isLoading, send, success] = useOrderSend();

  useEffect(() => {
    const extrasPrice = countExtrasPrice(selectedExtras);
    setPriceTotal(price + extrasPrice);
  }, [price, selectedExtras]);

  const countExtrasPrice = (extrasIds: string[]) =>
    extrasIds.reduce((total, id: string) => {
      const extra: Extra | undefined = AVAILABLE_EXTRAS.find(
        (option: Extra) => option.id === id
      );
      if (!extra) return total;
      return total + extra.price;
    }, 0);

  const handleOrderClick = () => {
    if (!name || !address) {
      setValidationError("Please fill both fields");
      return;
    }
    send({ address, id, name });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetValidation();
    setName(e.target.value);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetValidation();
    setAddress(e.target.value);
  };

  const resetValidation = () => {
    setValidationError("");
  };

  return (
    <>
      <MultiSelect
        onChange={setSelectedExtras}
        options={AVAILABLE_EXTRAS}
        selectedOptions={selectedExtras}
      />
      <div className="text-right">
        <div className="mb-3">
          <input
            className="form-control"
            name="name"
            onChange={handleNameChange}
            placeholder="Name"
            type="text"
            value={name}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            name="address"
            onChange={handleAddressChange}
            placeholder="Address"
            type="text"
            value={address}
          />
        </div>
        {validationError && (
          <p className="text-danger text-center">{validationError}</p>
        )}
        {error && <p className="text-danger text-center">{error}</p>}
        {success && (
          <p className="text-success text-center">Your order has been placed</p>
        )}
        <div className="row">
          <div className="col">
            <strong>Total:</strong> <Price price={priceTotal} />
          </div>
          <div className="col text-end">
            <button
              className="btn btn-success"
              disabled={isLoading}
              onClick={handleOrderClick}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormOrder;
