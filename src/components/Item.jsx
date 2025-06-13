import { Link } from "react-router"; 

export default function Item({ product }) {
  return (
    <div className="itemCard">
      <img src={product.images[0]} alt={product.title} />
      <h4>{product.title}</h4>
      <p className="category">{product.category}</p>
      <p className="price">${product.price}</p>
      <Link className="seeMoreBtn" to={`/item/${product.id}`}>
        See more
      </Link>
    </div>
  );
}
