import "./App.css";
import Inicio from "./components/Inicio/Inicio";
import Footer from "./components/Inicio/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import BuenasPracticas from "./components/Buenas-Practica/BuenasPracticas";
import Politicas from "./components/Politicas/PoliticaIntegra";
import Leyes from "./components/Leyes/Leye";
import Certificaciones from "./components/Operaciones/Certificados";
import ScrollToTopButton from "./components/Inicio/BotonFlotante";
import Faena from "./components/Faena/Faenas";
import Navbar from "./components/Sidebar/Sidebar";
import Contacto from "./components/Contacto/Contacto-formulario";
import Denuncia from "./components/Contacto/contacto-denuncia";
import Consulta from "./components/Contacto/Contacto-consulta";
import Faq from "./components/Contacto/Faq";

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
