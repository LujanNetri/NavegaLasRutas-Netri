import Item from "./Item";
import "../css/ItemList.css"
export default function ItemList({ products }) {
  if (!products || products.length === 0) 
    return <p>Cargando productos...</p>;

  return (
    <div className="itemList">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}
