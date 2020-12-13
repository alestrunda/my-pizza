import { fireEvent, render } from "@testing-library/react";

import FormOrder from "./FormOrder";

test("can type in text fields", () => {
  const form = render(<FormOrder id="pizzaId" price={15} />);
  const name = form.getByPlaceholderText("Name") as HTMLInputElement;
  const address = form.getByPlaceholderText("Address") as HTMLInputElement;
  fireEvent.change(name, { target: { value: "John Doe" } });
  fireEvent.change(address, { target: { value: "My address" } });

  expect(name.value).toBe("John Doe");
  expect(address.value).toBe("My address");
});

test("when name empty then prints error", () => {
  const form = render(<FormOrder id="pizzaId" price={15} />);
  const submit = form.getByText("Order");
  fireEvent.click(submit, {});

  expect(form.getByText("Please fill both fields")).toBeInTheDocument();
});
