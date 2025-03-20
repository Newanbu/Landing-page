import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

// Importaciones de componentes
import Inicio from "./components/Inicio/Inicio.jsx";
import Footer from "./components/Inicio/Footer.jsx";
import BuenasPracticas from "./components/Buenas-Practica/BuenasPracticas.jsx";
import Politicas from "./components/Politicas/PoliticaIntegra.jsx";
import Leyes from "./components/Leyes/Leye.jsx";
import Certificaciones from "./components/Operaciones/Certificados.jsx";
import ScrollToTopButton from "./components/Inicio/BotonFlotante.jsx";
import Faena from "./components/Faena/Faenas.jsx";
import Navbar from "./components/Sidebar/Sidebar.jsx";
import Contacto from "./components/Contacto/ContactoFormulario.jsx";
import Denuncia from "./components/Contacto/ContactoDenuncia.jsx";
import Consulta from "./components/Contacto/ContactoConsulta.jsx";
import Faq from "./components/Contacto/Faq.jsx";


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/buena-practica" element={<BuenasPracticas />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/leyes" element={<Leyes />} />
          <Route path="/sustentabilidad" element={<Certificaciones />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/denuncia" element={<Denuncia />} />
          <Route path="/consulta" element={<Consulta />} />
          <Route path="/servicios" element={<Faena />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <ScrollToTopButton/>
        <Footer/>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
