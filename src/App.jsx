import "./App.css";
import Inicio from "./components/Inicio/Inicio";
import Footer from "./components/Inicio/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import BuenasPracticas from "./components/Buenas-Practica/BuenasPracticas";
import Politicas from "./components/Politicas/PoliticaIntegra";
import Leyes from "./components/Leyes/Leye";
import Certificaciones from "./components/Operaciones/Certificados";
import ContactoDenuncia from "./components/Contacto/contacto";
import ScrollToTopButton from "./components/Inicio/BotonFlotante";
import Faena from "./components/Faena/Faenas";
import Navbar from "./components/sidebar/sidebar";

function App() {
  return (
    <ChakraProvider> {/* Mueve ChakraProvider al nivel superior */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/buena-practica" element={<BuenasPracticas />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/leyes" element={<Leyes />} />
          <Route path="/sustentabilidad" element={<Certificaciones />} />
          <Route path="/contacto-denuncia" element={<ContactoDenuncia />} />
          <Route path="/servicios" element={<Faena />} />
        </Routes>
        <ScrollToTopButton/>

        <Footer/>

      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
