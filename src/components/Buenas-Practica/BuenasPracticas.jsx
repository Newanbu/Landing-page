import React, { useState } from "react";
import { 
  Box, Button, Text, Heading, Image, Flex, Modal, ModalOverlay, 
  ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter 
} from "@chakra-ui/react";
import { motion } from "framer-motion"; // ✅ Importando Framer Motion

// Variantes de animaciones para Framer Motion
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};


const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const BuenasPracticas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPractica, setSelectedPractica] = useState(null);

  const openModal = (practica) => {
    setSelectedPractica(practica);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPractica(null);
  };

  const practicas = [
    {
      title: "Recomendación de DPF y Check Engine",
      description: "Para el buen funcionamiento del vehículo, debe conducirse entre 2.000 y 3.000 RPM.",
      image: "/engine1.webp"
    },
    {
      title: "Recomendación en la Conducción de Vehículos 4×4",
      description:
        "El 4×4 no se debe aplicar innecesariamente, por ejemplo, al bajar a la ciudad en caminos pavimentados, rmes o secos.\n\n" +
        "Para activar la 4×4 high o low, detenga el vehículo completamente, presione el pedal de freno, presione el pedal de embrague y gire el control 4×4.\n\n" +
        "Para desactivar la 4×4, el vehículo debe estar detenido y se debe retroceder un poco en marcha atrás para desengancharla.",
      image: "/engine2.webp"
    },
    {
      title: "Cambio Electrónico de Marchas",
      description:
        "2WD: Tracción en el eje trasero solamente.\n\n" +
        "4×4 HIGH: Potencia en los ejes delanteros y traseros para aumentar tracción. Se utiliza en caminos de bichuta donde se necesita mayor velocidad, con un máximo de 72 km/hr.\n\n" +
        "4×4 LOW: Potencia en los ejes delantero y trasero con reducción, para disminuir la velocidad y aumentar la fuerza de tracción. Se usa en caminos de arena, barro o nieve con una velocidad máxima de 30 km/hr.",
      image: "/engine3.webp"
    },
  ];

  return (
    <Box w="full" minH="100vh" p={5} borderRadius="lg" shadow="lg" bg="gray.100">
      {/* Título y Logo - Ahora totalmente responsive */}
      <Flex direction="column" align="center" textAlign="center" mb={6} px={4}>
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
      Buenas prácticas
    </Heading>
  </motion.div>

      </Flex>

      {/* Descripción */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Text textAlign="left" mb={4} px={4} fontSize={{ base: "md", md: "md" }}>
          Seguir estas buenas prácticas garantizará un manejo seguro, eficiente y responsable, 
          ayudando a prolongar la vida útil de los vehículos y mejorar la seguridad de todos en el camino.
        </Text>
      </motion.div>

      {/* Lista de Buenas Prácticas en Fila */}
      <Flex wrap="wrap" justify="center" gap={6} px={4}>
        {practicas.map((practica, index) => (
          <motion.div 
            key={index} 
            initial="hidden" 
            animate="visible" 
            variants={slideInLeft} 
            style={{ width: "100%", maxWidth: "450px", flexBasis: "calc(50% - 16px)" }}
          >
            <Box
              w="full"
              p={4}
              borderRadius="md"
              shadow="md"
              bg="gray.200"
              textAlign="center"
              transition="transform 0.2s ease-in-out"
              _hover={{ transform: "scale(1.02)" }}
              cursor="pointer"
              onClick={() => openModal(practica)} // Abre el modal al hacer clic en la tarjeta
            >
              <Image 
                src={practica.image} 
                alt={`Imagen de ${practica.title}`} 
                w="100%" maxH="200px" objectFit="cover" borderRadius="md" mb={4}
              />

              <Button
                w="full"
                colorScheme="teal"
                fontWeight="bold"
                textAlign="left"
                justifyContent="space-between"
                display="flex"
                alignItems="center"
                fontSize={{ base: "sm", md: "md" }}
                transition="background 0.3s ease-in-out"
                _hover={{ bg: "teal.700" }}
                _active={{ transform: "scale(0.98)" }}
              >
                <Text flex="1" isTruncated>{practica.title}</Text>
              </Button>
            </Box>
          </motion.div>
        ))}
      </Flex>

      {/* Modal con información de la práctica */}
      <Modal isOpen={isOpen} onClose={closeModal} isCentered size="lg">
        <ModalOverlay />
        <ModalContent 
          maxW="90vw" maxH="80vh" overflowY="auto"
          as={motion.div} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }}
        >
          <ModalHeader textAlign="center">{selectedPractica?.title}</ModalHeader>
          <ModalCloseButton />
          
          <ModalBody>
            <Flex direction="column" align="center">
              {/* Imagen dentro del modal */}
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <Image 
                  src={selectedPractica?.image} 
                  alt="Imagen de la Práctica" 
                  w="100%" maxH="250px" objectFit="cover" borderRadius="lg" mb={4}
                />
              </motion.div>

              <Text whiteSpace="pre-line" textAlign="justify">
                {selectedPractica?.description}
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

export default BuenasPracticas;
