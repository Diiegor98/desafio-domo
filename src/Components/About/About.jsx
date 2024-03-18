//Import React-Bootstrap Components
import { Card } from "react-bootstrap";

//Import Imagenes SVG
import tnwSVG from "../../assets/tnw.svg";
import googleSVG from "../../assets/google.svg";
import nikeSVG from "../../assets/nike.svg";
import airbnbSVG from "../../assets/airbnb.svg";
import newsSVG from "../../assets/news.svg";
import mobile from "../../assets/mobile.png"

//Import Estilos
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about d-flex flex-column justify-content-center align-items-center bg-light pt-5">
      <p>CLIENTS WE WORKED WITH</p>
      <div className="about-brands-container">
        <img src={tnwSVG} />
        <img src={googleSVG} />
        <img src={nikeSVG} />
        <img src={airbnbSVG} />
        <img src={newsSVG} />
      </div>
      <div className="about-cards-container d-flex flex-wrap">
        <Card className="d-flex flex-row justify-content-start">
          <div className="card-container d-flex flex-column align-items-start">
            <Card.Title className="about-card-title">
              Get in touch with us
            </Card.Title>
            <span className="about-card-subtext">
              Maecenas sed diam eget risus varius blandit sit amet non magna.
            </span>
            <button className="btn btn-about ms-2">Hire us</button>
          </div>
        </Card>
        <Card className="d-flex flex-row justify-content-start">
          <div className="card-container d-flex flex-column align-items-start">
            <Card.Title className="about-card-title">Our Projects</Card.Title>
            <span className="about-card-subtext">
              Maecenas sed diam eget risus varius blandit sit amet non magna.
            </span>
            <button className="btn btn-about ms-2">See Projects</button>
          </div>
          <img width={210} src={mobile} alt="mobile" />
        </Card>
      </div>
    </section>
  );
};

export default About;
