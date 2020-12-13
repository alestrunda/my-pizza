import { useParams } from "react-router-dom";
import FormOrder from "../components/FormOrder";
import Page from "../components/Page";
import Price from "../components/Price";
import usePizza from "../hooks/usePizza";

interface ParamTypes {
  id: string;
}

const PizzaDetail = () => {
  const { id } = useParams<ParamTypes>();
  const [error, isLoading, pizza] = usePizza(id);

  return (
    <Page>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <p className="text-center">Loading</p>}
      {pizza && (
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h1 className="fs-2">Usersnack - {pizza.name}</h1>
                <h2 className="fs-3">{pizza.name}</h2>
                <Price price={pizza.price} />
                <p>{pizza.ingredients.join(", ")}</p>
              </div>
              <div className="col-md-6">
                <img
                  className="rounded float-end"
                  src={`../images/${id}.jpg`}
                  alt={pizza.name}
                />
              </div>
            </div>
            <hr />
            <FormOrder id={pizza.id} price={pizza.price} />
          </div>
        </div>
      )}
    </Page>
  );
};

export default PizzaDetail;
