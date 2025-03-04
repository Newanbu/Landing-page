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

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const Leyes = () => {
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

  const policies = [
    {
      key: "ley20393",
      title: "Ley 20.393 - Prevención de Delitos",
      description: `Serving Consultores LTDA. ha implementado un Modelo de Prevención de Delitos (MPD) bajo la Ley 20.393.\n\n
      Esta ley establece responsabilidad penal a las personas jurídicas en delitos como:\n
      - Lavado de activos.\n
      - Financiamiento del terrorismo.\n
      - Cohecho.\n\n
      Todos los colaboradores y ejecutivos están comprometidos con el cumplimiento de este modelo.`,
      image: "src/assets/ley20393.jpg"
    },
    {
      key: "leyKarin",
      title: "Ley Karin - Prevención del Acoso y Violencia Laboral",
      description: `Nuestra empresa se adhiere a la Ley Karin (Ley 21.643), que previene y sanciona el acoso y la violencia en el trabajo.\n\n
      **Clasificación del acoso laboral:**\n
      - **Horizontal:** Entre compañeros del mismo nivel jerárquico.\n
      - **Descendente:** De un superior a un subordinado.\n
      - **Ascendente:** De empleados hacia un supervisor.\n\n
      Fomentamos un ambiente de respeto e integridad para todos.`,
      image: "src/assets/leykarin.jpg"
    }
  ];

  return (
    <Box w="full" minH="100vh" p={{ base: 4, md: 6 }} borderRadius="lg" shadow="lg" bg="gray.100">
      {/* Título y Logo */}
      <Flex direction="column" align="center" textAlign="center" mb={6} px={{ base: 2, md: 4 }}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}
        >
          {/* Logo */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Image 
              src="src/assets/logo_transparente.png" 
              alt="Logo de la Empresa" 
              w={{ base: 10, md: 14, lg: 16 }} 
            />
          </motion.div>

          {/* Título */}
          <Heading fontSize={{ base: "lg", md: "xl", lg: "2xl" }} color="teal.600" textAlign="center">
            Legislación Aplicable
          </Heading>
        </motion.div>
      </Flex>

      {/* Descripción */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Text 
          textAlign="center" 
          mb={4} 
          px={{ base: 3, md: 6 }} 
          fontSize={{ base: "sm", md: "md", lg: "lg" }} 
          lineHeight="1.6"
        >
          Serving Consultores LTDA. cumple con las normativas vigentes para garantizar un entorno laboral seguro y responsable.
        </Text>
      </motion.div>

      {/* Lista de Leyes en Cards Responsivas */}
      <Flex wrap="wrap" justify="center" gap={4} px={{ base: 3, md: 6 }}>
        {policies.map((policy, index) => (
          <motion.div 
            key={index} 
            initial="hidden" 
            animate="visible" 
            variants={slideInLeft} 
            style={{ width: "100%", maxWidth: "420px" }}
          >
            <Box
              w="full"
              p={4}
              borderRadius="md"
              shadow="md"
              bg="gray.200"
              textAlign="center"
              transition="transform 0.2s ease-in-out"
              _hover={{ transform: "scale(1.03)" }}
              cursor="pointer"
              onClick={() => openModal(policy)}
            >
              <Image 
                src={policy.image} 
                alt={`Imagen de ${policy.title}`} 
                w="100%" maxH="200px" objectFit="cover" borderRadius="md" mb={4}
              />

              <Button
                w="full"
                colorScheme="teal"
                fontSize={{ base: "sm", md: "md" }}
                transition="background 0.3s ease-in-out"
                _hover={{ bg: "teal.700" }}
                _active={{ transform: "scale(0.98)" }}
              >
                {policy.title}
              </Button>
            </Box>
          </motion.div>
        ))}
      </Flex>

      {/* Modal con información de la ley */}
      <Modal isOpen={isOpen} onClose={closeModal} isCentered size="lg">
        <ModalOverlay />
        <ModalContent 
          maxW={{ base: "95vw", md: "80vw" }} 
          maxH="80vh" 
          overflowY="auto"
          as={motion.div} 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.3 }}
        >
          <ModalHeader textAlign="center" fontSize={{ base: "lg", md: "xl" }}>
            {selectedPolicy?.title}
          </ModalHeader>
          <ModalCloseButton />
          
          <ModalBody>
            <Flex direction="column" align="center">
              {/* Imagen dentro del modal */}
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <Image 
                  src={selectedPolicy?.image} 
                  alt="Imagen de la Ley" 
                  w="100%" maxH="250px" objectFit="cover" borderRadius="lg" mb={4}
                />
              </motion.div>

              <Text 
                whiteSpace="pre-line" 
                textAlign="justify" 
                fontSize={{ base: "sm", md: "md" }}
                lineHeight="1.6"
              >
                {selectedPolicy?.description}
              </Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" onClick={closeModal}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Leyes;
