import "./App.css";
import Inicio from "./components/Inicio/inicio.jsx";
import Footer from "./components/Inicio/footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import BuenasPracticas from "./components/Buenas-Practica/buenasPracticas.jsx";
import Politicas from "./components/Politicas/politicaIntegra.jsx";
import Leyes from "./components/Leyes/leye.jsx";
import Certificaciones from "./components/Operaciones/certificados.jsx";
import ScrollToTopButton from "./components/Inicio/botonFlotante.jsx";
import Faena from "./components/Faena/faenas.jsx";
import Navbar from "./components/Sidebar/sidebar.jsx";
import Contacto from "./components/Contacto/contacto-formulario.jsx";
import Denuncia from "./components/Contacto/contacto-denuncia.jsx";
import Consulta from "./components/Contacto/contacto-consulta.jsx";
import Faq from "./components/Contacto/faq.jsx";

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
