//Import Estilos
import "./services.css";

//Import React-Bootstrap Components
import { Card } from "react-bootstrap";

//Import Datos para las cards de servicios
import { servicesdata } from "./servicesdata";

const Services = () => {
  return (
    <section
      id="services"
      className="services d-flex flex-column justify-content-center align-items-center"
    >
      <h2>Our Services</h2>
      <p className="w-50 text-center">
        We feel very strong about our skills when it comes to planning,
        designing and coding applications. Here is what we love to do!
      </p>
      <div className="service-cardscontainer col-12">
        {servicesdata.map((service) => {
          return (
            <Card key={service.id} className="service-card">
              <div className="d-flex flex-column align-items-center">
                <div className="service-icon">
                  <i className={service.clases} />
                </div>
                <Card.Title className="service-name">{service.name}</Card.Title>
                <Card.Text className="service-text">{service.text}</Card.Text>
              </div>
              <button className="btn service-btn">Learn more</button>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
