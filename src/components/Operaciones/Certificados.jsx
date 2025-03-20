import React, { useState } from "react";
import { 
  Box, Button, Text, Heading, Image, Flex, Modal, ModalOverlay, 
  ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter 
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
const MotionBox = motion(Box);
const MotionButton = motion(Button);

const Certificaciones = () => {
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
      title: "ISO 14001: 2004",
      description: "ISO 14001:2004 tiene el propósito de apoyar la aplicación de un plan de manejo ambiental en cualquier organización del sector público o privado.",
      image: "/sustainability1.webp"
    },
    {
      title: "OHSAS 18001: 2007",
      description: "OHSAS 18001:2007 contempla Evaluación de Higiene y Seguridad Ocupacional, siendo un estándar internacional que permite a una organización controlar sus riesgos y mejorar el desempeño.",
      image: "/sustainability2.webp"
    },
    {
      title: "ISO 9001: 2008",
      description: "ISO 9001:2008 es la base del sistema de gestión de calidad, una norma internacional que establece los elementos de administración de calidad con los que una empresa debe contar para mejorar la calidad de sus productos o servicios.",
      image: "/sustainability3.webp"
    },
    {
      title: "Responsabilidad Social Corporativa",
      description: "Serving Consultores LTDA. integra la calidad, salud, seguridad y cuidado del medio ambiente con la ética empresarial, los derechos humanos y la lucha contra la corrupción, promoviendo el desarrollo sostenible.",
      image: "/RSC.webp"
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
    Sustentabilidad
  </Heading>
</motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <Text textAlign="center" mt={2} fontSize={{ base: "sm", md: "md" }} color="gray.600">
            Nuestras certificaciones reflejan nuestro compromiso con la calidad, seguridad y sostenibilidad.
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

          <ModalFooter>
            <MotionButton 
              colorScheme="red" 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={closeModal}
            >
              Cerrar
            </MotionButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Certificaciones;
