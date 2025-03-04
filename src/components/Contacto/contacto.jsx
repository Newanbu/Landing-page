import React, { useState } from "react";
import { 
  Box, Button, FormControl, FormLabel, Input, Textarea, Select, 
  Heading, VStack,Image 
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);


const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ContactoDenuncia = () => {
  const [formData, setFormData] = useState({
    tipo: "contacto", // "contacto" o "denuncia"
    categoriaDenuncia: "",
    nombre: "",
    email: "",
    mensaje: "",
    personas:"",
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <MotionBox 
      w="full" maxW="600px" p={6} m={10} borderRadius="lg" shadow="lg" bg="white"
      initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
      mx="auto" mt={10}
    >
    <motion.div 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",marginBottom:"10px"}} // Alineación horizontal con espacio uniforme
    >
      {/* Logo */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Image 
          src="src/assets/logo_transparente.png" 
          alt="Logo de la Empresa" 
          w={{ base: 10, md: 14 }} // Tamaño ajustado para mejor alineación
        />
      </motion.div>

      {/* Título */}
      <Heading as="h2" size="lg" color="teal.600" textAlign="center">
        Contacto y Denuncias
      </Heading>
    </motion.div>

      <form>
        <VStack spacing={4}>

          {/* Seleccionar tipo de mensaje */}
          <FormControl isRequired>
            <FormLabel>Tipo de Mensaje</FormLabel>
            <Select name="tipo" value={formData.tipo} onChange={handleChange}>
              <option value="contacto">Contacto</option>
              <option value="denuncia">Denuncia solo a gerente</option>
            </Select>
          </FormControl>

          {/* Opciones de denuncia solo si se elige "Denuncia" */}
          {formData.tipo === "denuncia" && (
            <>
              <FormControl isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="tucorreo@email.com" />
            </FormControl>

            <FormControl>
              <FormLabel>Personas Involucradas (Solo si deseas compartir)</FormLabel>
              <Input type="text" name="personas" value={formData.personas} onChange={handleChange} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Categoría de la Denuncia</FormLabel>
              <Select name="categoriaDenuncia" value={formData.categoriaDenuncia} onChange={handleChange}>
                <option value="">Selecciona una categoría</option>
                <option value="mpd">Modelo de Prevención de Delitos</option>
                <option value="codigoEtica">Código de Ética</option>
                <option value="acoso">Acoso Sexual, Laboral y Violencia En El Trabajo</option>
              </Select>
            </FormControl>
            </>
          )}

          {/* Nombre y Email solo si es un contacto */}
          {formData.tipo === "contacto" && (
            <>
              <FormControl isRequired>
                <FormLabel>Nombre</FormLabel>
                <Input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="tucorreo@email.com" />
              </FormControl>
            </>
          )}

          {/* Mensaje */}
          <FormControl isRequired>
            <FormLabel>Mensaje</FormLabel>
            <Textarea name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Escribe tu mensaje aquí..." rows={5} />
          </FormControl>

          {/* Botón de enviar */}
          <Button type="submit" colorScheme="teal" width="full">
            Enviar Mensaje
          </Button>

        </VStack>
      </form>
    </MotionBox>
  );
};

export default ContactoDenuncia;
