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

        <section className="brandMessage">
          <h3>More than just clothing</h3>
          <p>
            At Modela, we believe that clothing not only dresses you, but also
            speaks for you. Accesible, modern fashion with attitude
          </p>
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
      </div>
    );
}
