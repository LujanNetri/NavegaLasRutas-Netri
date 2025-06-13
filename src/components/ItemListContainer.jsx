import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import "../css/ItemListContainer.css";

const categoriesByGender = {
  men: ["mens-shirts", "mens-shoes", "mens-watches"],
  women: [
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ],
};

export default function ItemListContainer({ welcomeMessage }) {
  const [products, setProducts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { gender } = useParams();

  const categories = categoriesByGender[gender] || []
  useEffect(() => {

    if (!gender) {
      setProducts([]);
      return
    } 

      if(selectedCategory === "all")
      {
        new Promise((resolve) => {
          setTimeout(() => {
            Promise.all(
              categories.map((cat) =>
                fetch(`https://dummyjson.com/products/category/${cat}`).then(
                  (res) => res.json()
                )
              )
            ).then((results) => {
              const allProducts = results.map((r) => r.products).flat();
              resolve(allProducts);
            });
          }, 500);
        }).then((data) => setProducts(data));
    }  else 
    {
      fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
    }
  }, [gender,selectedCategory]);

  return (
    <div className="pageContent">
      <div className="filterContainer">
        <label className="categorySelect">Filter by category:</label>
        <select id="categorySelect" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="all">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat
                .replace("mens-", "")
                .replace("womens-", "")
                .replace("-", " ")}
            </option>
          ))}
        </select>
      </div>
      <ItemList products={products} />
    </div>
  );
}
