import { BsLink45Deg } from "react-icons/bs";
import { Link } from "react-router";
import CartWidget from "./CartWidget";
import "../css/navBar.css";

export default function NavBar({totalItems}) {
  return (
    <nav>
      <h1>
        <Link to="/" className="logo">
          <span id="first-letter">M</span>odela
        </Link>
      </h1>
      <div className="list">
        <Link to="/">Home</Link>
        <Link to="/category/men">Men</Link>
        <Link to="/category/women">Women</Link>
        <Link to="/about">About Us</Link>
      </div>
      <div className="cart">
        <CartWidget totalItems={totalItems} />
      </div>
    </nav>
  );
}
