import React, { useState } from "react";
import { 
  Box, Button, Text, Heading, Image, Flex, Modal, ModalOverlay, 
  ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter 
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
const MotionBox = motion(Box);
const MotionButton = motion(Button);

const Faena = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCert(null);
  };

  const certificaciones = [
    {
      title: "Observador de conductas",
      description: "El Programa de Seguridad Conductual está centrado en identificar conductas por medio de una observación en terreno, pretendiendo observar conductas seguras, con el objetivo de reforzar y generar reconocimiento, aumentando su probabilidad y frecuencia en el futuro, igualmente, identificar conductas peligrosas que puedan poner en riesgo la vida de los trabajadores, con el fin de corregir y ejecutar acciones correctivas y preventivas inmediatas, disminuyendo su ocurrencia en el futuro.",
      image: "/Faena1.webp"
    },
    {
      title: "Tour Chuquicamata",
      description: "Este tour ofrece la oportunidad imperdible de conocer la Mina de Chuquicamata y su Campamento de forma gratuita, como un servicio a la comunidad nacional e internacional que facilita CODELCO División Chuquicamata. Durante el tour se recorre el campamento minero, se participa en una charla que explica el procesamiento del cobre y se observa el rajo de la mina más grande del mundo, incluyendo el movimiento de los enormes camiones de extracción. El tour habitual se realiza de Lunes a Viernes y su recorrido inicia a las 13:00 horas con el check in de pasajeros y una charla introductoria y de seguridad, retornado a las 16:30 horas aproximadamente. El lugar de reunión es en la Oficina de Visitas de Tour Chuquicamata ubicada en Avenida Granaderos 4025 en Calama. Los Guías de Tour están capacitados para brindar un servicio de calidad y se realiza simultáneamente en Español e Inglés. Para reservar las visitas se debe enviar una solicitud mediante correo electrónico a visitas@codelco.cl para asegurar su cupo y retornarle información detallada importante sobre el tour. Las visitas tienen restricción para menores de 7 años y mujeres con más de 5 meses de embarazo. Si desea mayor información puede llamar al teléfono 55 2 322 122, donde será un gusto atenderle.",
      image: "/Faena5.webp"
    },
    {
      title: "Levantamiento de brecha",
      description: "Trabajos relacionados con el PESSO, toma de fotografías, búsqueda de información técnica, apoyo técnico a campañas publicitarias, asistencia técnica de terreno, recepción de E-200 de las empresas, normalización de documentación Divisional, diseño gráfico de charlas, apoyo presentaciones",
      image: "/Faena4.webp"
    },
    {
        title: "Servicio Mantención",
        description: "Mantención y/o reparación de la infraestructura de la Muestrera, Grupo electrógeno, Sistema de agua potable, agua industrial y alcantarillado existente, campamento, etc.",
        image: "/Faena6.webp"
    },
    {
        title: "Señaletica",
        description: "Suministro, instalación y mantenimiento integral de señalización vial en calles y caminos dentro de recintos industriales de DCH. Nuestro servicio garantiza la correcta visibilidad, seguridad y durabilidad de la señalización, cumpliendo con normativas vigentes y asegurando una adecuada orientación y prevención de riesgos en entornos de alto tránsito",
        image: "/Trabajo6.webp"
    }
  ];

  return (
    <Box w="full" minH="100vh" p={5} borderRadius="lg" shadow="lg" bg="gray.100">
      {/* Título */}
      <Flex direction="column" align="center" textAlign="center" mb={6}>
<motion.div 
  initial={{ opacity: 0, y: -20 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.5 }} 
  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }} // Alineación horizontal con espacio entre elementos
>
  {/* Logo */}
  <motion.div initial="hidden" animate="visible" variants={fadeIn}>
    <Image 
      src="/logo_transparente.webp" 
      alt="Logo de la Empresa" 
      w={{ base: 12, md: 16 }} 
      mt={1} // Espaciado ajustado
    />
  </motion.div>

  {/* Título */}
  <Heading fontSize={{ base: "xl", md: "2xl" }} color="teal.600" textAlign="center">
    Servicios
  </Heading>
</motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <Text textAlign="center" mt={2} fontSize={{ base: "sm", md: "md" }} color="gray.600">
          Ejecutamos nuestras operaciones en faena con un enfoque en eficiencia, seguridad y cumplimiento normativo, 
          garantizando soluciones confiables y adaptadas a entornos industriales exigentes.
          </Text>
        </motion.div>
      </Flex>

      {/* Certificaciones en Cards */}
      <Flex wrap="wrap" justify="center" gap={6} px={4}>
        {certificaciones.map((cert, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }} 
            style={{ width: "100%", maxWidth: "320px" }}
          >
            <MotionBox
              w="full"
              p={4}
              borderRadius="md"
              shadow="md"
              bg="white"
              textAlign="center"
              transition="all 0.3s ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              _hover={{ 
                bg: "blue.100", // Fondo azul claro al pasar el mouse
                shadow: "lg", // Aumenta la sombra para destacar
                transition: "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
              }}
              cursor="pointer"
              onClick={() => openModal(cert)}
            >
              <Image 
                src={cert.image} 
                alt={`Certificación ${cert.title}`} 
                w="100%" maxH="150px" objectFit="contain" borderRadius="md" mb={4}
              />
              <Heading fontSize="lg" color="teal.600">{cert.title}</Heading>
            </MotionBox>
          </motion.div>
        ))}
      </Flex>

      {/* Modal con detalles de certificación */}
      <Modal isOpen={isOpen} onClose={closeModal} isCentered size="lg">
        <ModalOverlay />
        <ModalContent 
          maxW="90vw" maxH="80vh" overflowY="auto"
          as={motion.div} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }}
        >
          <ModalHeader textAlign="center">{selectedCert?.title}</ModalHeader>
          <ModalCloseButton />
          
          <ModalBody>
            <Flex direction="column" align="center">
              {/* Imagen dentro del modal */}
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <Image 
                  src={selectedCert?.image} 
                  alt="Certificación" 
                  w="100%" maxH="250px" objectFit="contain" borderRadius="lg" mb={4}
                />
              </motion.div>

              <Text whiteSpace="pre-line" textAlign="justify">
                {selectedCert?.description}
              </Text>
            </Flex>
          </ModalBody>
          <Flex justifyContent="space-between" w="100%" p={4}>
              <MotionButton colorScheme="green">
                <Link to="/contacto">Contratar</Link>
              </MotionButton>

              <MotionButton 
                colorScheme="red" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                onClick={closeModal}
              >
                Cerrar
              </MotionButton>
            </Flex>

          
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Faena;
