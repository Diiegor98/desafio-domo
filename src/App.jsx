//Import Componentes
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Technology from "./Components/Technology/Technology";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

//Import Estilos
import "./app.css";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Services />
      <Technology />
      <About />
      <Footer />
    </div>
  );
}

export default App;
