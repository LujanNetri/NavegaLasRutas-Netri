import "../css/AboutUs.css";

export default function AboutUs()
{
    return (
      <div className="about">
        <section className="aboutHeader">
          <h2>About Modela</h2>
          <p>Fashion that speaks for you.</p>
        </section>

        <section className="aboutCardContainer">
          <div className="aboutCard">
            <h3>Our Vision</h3>
            <p>
              At Modela, we believe fashion is more than just trends. It's a way
              to express who you are, without saying a word.
            </p>
          </div>

          <div className="aboutCard">
            <h3>Why Modela?</h3>
            <p>
              Every piece is curated with care. Whether you're dressing up or
              keeping it casual, we help you find your unique voice through
              fashion.
            </p>
          </div>

          <div className="aboutCard">
            <h3>Join the Movement</h3>
            <p>
              Modela is not just a brand — it’s a community. Be bold. Be modern.
              Be you.
            </p>
          </div>
        </section>
      </div>
    );
}
