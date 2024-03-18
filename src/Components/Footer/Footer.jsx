//Import Estilos
import "./footer.css";

const Footer = () => {
  return (
    <section id="footer" className="footer d-flex justify-content-center">
      <div className="footer-container d-flex justify-content-center">
        <div className="text-footer col-12 col-md-5">
          <h6>Diego Rodríguez</h6>
          <p>
            Este sitio web fue maquetado como prueba técnica para DOMO, se
            utilizó React y react-bootstrap. A continuación les comparto mis
            redes sociales.
          </p>
          <div className="footer-redes d-flex gap-3">
            <a href="https://github.com/Diiegor98" target="_blank">
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/diiegorodriguez/"
              target="_blank"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="mailto:diiegor98@gmail.com" target="_blank">
              <i className="bi bi-envelope-fill"></i>
            </a>
            <a href="https://diegorodriguez.vercel.app/" target="_blank">
              Portfolio
            </a>
          </div>
        </div>
        <div className="lists-footer d-flex col-12 col-md-5">
          <div>
            <p>SITEMAP</p>
            <ul>
              <li>Home</li>
              <li>Technology</li>
              <li>Services</li>
              <li>About</li>
            </ul>
          </div>
          <div>
            <p>CASE STUDIES</p>
            <ul>
              <li>Swiss Airlines</li>
              <li>Google</li>
              <li>Apple</li>
              <li>Nike</li>
            </ul>
          </div>
          <div>
            <p>CONTACT</p>
            <ul>
              <li>Jobs</li>
              <li>Hire us</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
