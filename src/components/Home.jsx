import {Link} from "react-router"
import "../css/Home.css"

export default function home ()
{
    return (
      <div className="home">
        <section className="hero">
          <h2>Find your style with Modela</h2>
          <p>Explore our collections for men and women.</p>
          <div className="ctaButton">
            <Link to="/category/men" className="cta">
              Hombre
            </Link>
            <Link to="/category/women" className="cta">
              Mujer
            </Link>
          </div>
        </section>

        <section className="featured">
          <h3>Destacados</h3>
          <div className="featuredGrid">
            <img src="/imagenes/men/men_product_4.jpg" alt="destacado" />
            <img src="/imagenes/men/men_product_5.jpg" alt="destacado" />
            <img src="/imagenes/women/women_product_2.jpg" alt="destacado" />
            <img src="/imagenes/women/women_product_4.jpg" alt="destacado" />
          </div>
        </section>

        <section className="categoriesPreview">
          <div className="previewMen">
            <h3>For him</h3>
            <Link to="/category/men">View collection</Link>
          </div>
          <div className="previewWomen">
            <h3>For her</h3>
            <Link to="/category/women">View collection</Link>
          </div>
        </section>

        <section className="brandMessage">
          <h3>More than just clothing</h3>
          <p>
            At Modela, we believe that clothing not only dresses you, but also
            speaks for you. Accesible, modern fashion with attitude
          </p>
        </section>
      </div>
    );
}
