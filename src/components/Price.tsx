interface Props {
  price: number;
}

const Price = ({ price }: Props) => <p className="fs-5">${price.toFixed(2)}</p>;

export default Price;
