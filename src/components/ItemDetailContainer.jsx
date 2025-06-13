import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../css/ItemDetailContainer.css";
import {Link} from "react-router";
export default function ItemDetailContainer({addToCart})
{
    const {id} = useParams()
    const[product,setProduct] = useState(null);
    const [quantity,setQuantity] = useState(1);

    useEffect(() => 
    {
          fetch(`https://dummyjson.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => setProduct(data));
    },[id])

    const handleAddToCart = () =>
    {
      addToCart(quantity);
    }

    if(!product)
        return <p>Cargando...</p>

    return (
      <div className="detailContainer">
        <div className="imageSection">
          <img src={product.images[0]} alt={product.title} />
        </div>

        <div className="infoSection">
          <h2>{product.title}</h2>
          <p className="category">{product.category}</p>
          <p className="description">{product.description}</p>
          <p className="price">Price: ${product.price}</p>

          <div className="quantityCart">
            <label htmlFor="quantity">Cantidad:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button className="addCartBtn" onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
}