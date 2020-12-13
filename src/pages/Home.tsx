import Page from "../components/Page";
import PizzaPreview from "../components/PizzaPreview";
import { Pizza } from "../hooks/usePizza";
import usePizzas from "../hooks/usePizzas";

const Home = () => {
  const [error, isLoading, pizzas] = usePizzas();

  return (
    <Page>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <p className="text-center">Loading</p>}
      <div className="row">
        {pizzas.map((pizza: Pizza) => (
          <div key={pizza.id} className="col-md-3">
            <PizzaPreview {...pizza} />
          </div>
        ))}
      </div>
    </Page>
  );
};

export default Home;
