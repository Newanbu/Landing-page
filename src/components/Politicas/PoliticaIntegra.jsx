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

const Politicas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  const openModal = (policy) => {
    setSelectedPolicy(policy);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPolicy(null);
  };

  const politicas = [
    {
      title: "Política de Alcohol y Drogas",
      description: "Serving Consultores Ltda. cree firmemente que el futuro depende de la salud física y mental de sus trabajadores, lo que unido a seguridad laboral, se traduce en productividad, calidad y seguridad en su gestión.\n\n" +
      "En una época de gran competitividad y exigencia, existen una serie de problemas personales que pueden afectar la vida del trabajador y su desempeño laboral, lo que en algunos casos se relaciona directamente con el consumo de bebidas alcohólicas y el uso de drogas.\n\n" +
      "Nuestra compañía no es ajena, ni asume un rol pasivo frente a estos graves problemas que afectan a la sociedad y, para asegurar que todos sus empleados reconozcan esta amenaza, aplicará una política tendiente a la minimización de los riesgos pertinentes.",
      image: "src/assets/politica4.jpg"
    },
    {
      title: "Política Integral",
      description: "Serving Consultores Ltda. se dedica a la ingeniería, asesorías y obras civiles en el sector minero e industrial. Nuestros objetivos incluyen la satisfacción del cliente, la seguridad laboral y la protección del medio ambiente.\n\n" +
      "- Productos de calidad que cumplen los requisitos del cliente.\n" +
      "- Cumplimiento de legislación vigente y normativas aplicables.\n" +
      "- Promoción de una cultura de prevención y calidad.\n" +
      "- Protección del medio ambiente y prevención de contaminación.\n" +
      "- Prevención de lesiones y enfermedades laborales.\n" +
      "- Compromiso con la mejora continua.",
      image: "src/assets/politica2.jpg"
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
      src="src/assets/logo_transparente.png" 
      alt="Logo de la Empresa" 
      w={{ base: 12, md: 16 }} 
      mt={1} // Espaciado ajustado
    />
  </motion.div>

  {/* Título */}
  <Heading fontSize={{ base: "xl", md: "2xl" }} color="teal.600" textAlign="center">
    Políticas de la Empresa
  </Heading>
</motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <Text textAlign="center" mt={2} fontSize={{ base: "sm", md: "md" }} color="gray.600">
            Conoce nuestras políticas que garantizan un ambiente laboral seguro y comprometido con la mejora continua.
          </Text>
        </motion.div>
      </Flex>

      {/* Políticas en Cards */}
      <Flex direction="column" align="center" justify="center">
  {politicas.map((policy, index) => (
    <motion.div 
      key={index} 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: index * 0.1 }} 
      style={{ width: "100%", maxWidth: "360px", minHeight: "320px" }} // Más compacto
    >
      <MotionBox
        w="full"
        p={3} // Menos padding para compactar
        borderRadius="md"
        shadow="md"
        bg="white"
        textAlign="center"
        transition="all 0.3s ease-in-out"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        _hover={{ 
          bg: "blue.100",
          shadow: "lg",
          transition: "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
        }}
        cursor="pointer"
        my={1} // Reduje margen vertical
        onClick={() => openModal(policy)}
      >
        <Image 
          src={policy.image} 
          alt={`Política ${policy.title}`} 
          w="100%" maxH="130px" objectFit="contain" borderRadius="md" mb={2} // Menos margen abajo
        />
        <Heading fontSize="md" color="teal.600">{policy.title}</Heading>
      </MotionBox>
    </motion.div>
  ))}
</Flex>


      {/* Modal con detalles de política */}
      <Modal isOpen={isOpen} onClose={closeModal} isCentered size="lg">
        <ModalOverlay />
        <ModalContent 
          maxW="90vw" maxH="80vh" overflowY="auto"
          as={motion.div} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }}
        >
          <ModalHeader textAlign="center">{selectedPolicy?.title}</ModalHeader>
          <ModalCloseButton />
          
          <ModalBody>
            <Flex direction="column" align="center">
              {/* Imagen dentro del modal */}
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <Image 
                  src={selectedPolicy?.image} 
                  alt="Política" 
                  w="100%" maxH="250px" objectFit="fill" borderRadius="lg" mb={4}
                />
              </motion.div>

              <Text whiteSpace="pre-line" textAlign="justify">
                {selectedPolicy?.description}
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

export default Politicas;
