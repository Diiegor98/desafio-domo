//Import React-Icons
import { GoArrowRight } from "react-icons/go";

//Import Estilos
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="col-12 col-md-6 d-flex justify-content-end">
        <div className="hero-text">
          <h1>We build beautiful and reliable web solutions</h1>
          <p>
            We strongly believe that communication, trust and transparency are
            the essential elements of successful business relationship. Ready
            for the journey?
          </p>
          <div>
            <button className="btn hero-btn me-2">Learn more</button>
            <button className="btn hero-btn2">
              Our Projects <GoArrowRight />
            </button>
          </div>
        </div>
      </div>
      <img
        className="hero-img col-12 col-md-6"
        src="https://domofrontendchallenge.netlify.app/img/asset-background.jpg"
      />
    </section>
  );
};

export default Hero;
