import { Pizza } from "../hooks/usePizza";
import Price from "../components/Price";
import { Link } from "react-router-dom";

const PizzaPreview = ({ id, ingredients, name, price }: Pizza) => (
  <div className="card">
    <Link to={`/pizza/${id}`}>
      <img src={`images/${id}.jpg`} className="card-img-top" alt={name} />
    </Link>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{ingredients.join(", ")}</p>
      <Price price={price} />
      <Link to={`/pizza/${id}`} className="btn btn-dark">
        Detail
      </Link>
    </div>
  </div>
);

export default PizzaPreview;
