//Import Estilos
import "./technology.css";

//Import imágenes SVG
import htmlSVG from '../../assets/html.svg'
import cssSVG from '../../assets/css.svg'
import sassSVG from '../../assets/sass.svg'
import nodejsSVG from '../../assets/nodejs.svg'
import angularSVG from '../../assets/angular.svg'
import pythonSVG from '../../assets/python.svg'

const Technology = () => {
  return (
    <section id="technology" className="technology d-flex justify-content-center align-items-center">
      <div className="tech-text col-12 col-md-5 col-lg-4 d-flex flex-column">
        <h3>We use cutting edge technology</h3>
        <p>
          Nullam id dolor nibh ultricies vehicula ut id elit. Aenean lacinia
          bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Nulla vitae alit
          libero, a pharetra augue. Vestibulum id ligula porta felis euismod
          semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor.
        </p>
      </div>
      <div className="tech-imgs col-12 col-md-5 col-lg-4 d-flex flex-wrap justify-content-center align-items-center">
        <div className="tech-imgs-container">
          <img src={htmlSVG} alt="html"/>
          <img src={cssSVG} />
          <img src={sassSVG} />
          <img src={nodejsSVG} />
          <img src={angularSVG} />
          <img src={pythonSVG} />
        </div>
      </div>
    </section>
  );
};

export default Technology;
