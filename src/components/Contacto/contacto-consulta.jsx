import React, { useState } from "react";
import { 
  Box, Button, FormControl, FormLabel, Input, Textarea, Select, 
  Heading, VStack, Image, useToast
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const MotionBox = motion(Box);

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Consulta = () => {
  const [formData, setFormData] = useState({
    tipo: "Consulta",
    objetivo: "",
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const toast = useToast();

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación: evitar campos vacíos
    if (!formData.nombre || !formData.email || !formData.mensaje || (formData.tipo === "Denuncia" && !formData.categoriaDenuncia)) {
        toast({
            title: "Error",
            description: "Por favor completa todos los campos requeridos.",
            status: "error",
            duration: 3000,
            isClosable: true
        });
        return;
    }

    // Crear objeto con datos asegurando que no haya valores "undefined"
    const emailParams = {
        tipo: formData.tipo || "Consulta",
        nombre: formData.nombre || "No proporcionado",
        email: formData.email || "No proporcionado",
        personas: formData.personas || "No Es Denuncia",
        objetivo: formData.objetivo || "N/A",
        telefono: formData.telefono || "N/A",
        mensaje: formData.mensaje || "Mensaje vacío"
    };

    // Enviar con EmailJS
    emailjs.send(
        "service_61ebmsx",   // 🔹 Reemplaza con tu SERVICE_ID
        "template_eycuv8d",  // 🔹 Reemplaza con tu TEMPLATE_ID
        emailParams,
        "tlOrInwcGki5BJT2N"  // 🔹 Reemplaza con tu PUBLIC_KEY
    ).then(
        (response) => {
            console.log("SUCCESS!", response.status, response.text);
            toast({
                title: "Mensaje enviado",
                description: "Tu mensaje ha sido enviado con éxito.",
                status: "success",
                duration: 3000,
                isClosable: true
            });
            setFormData({ tipo: "Consulta", objetivo: "", nombre: "", email: "", mensaje: "", personas: "" }); // 🔹 Limpia el formulario
        },
        (error) => {
            console.log("FAILED...", error);
            toast({
                title: "Error",
                description: "No se pudo enviar el mensaje.",
                status: "error",
                duration: 3000,
                isClosable: true
            });
        }
    );
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
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom:"10px" }}
      >
        {/* Logo */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Image 
            src="/logo_transparente.webp" 
            alt="Logo de la Empresa" 
            w={{ base: 10, md: 14 }} 
          />
        </motion.div>

        {/* Título */}
        <Heading as="h2" size="lg" color="teal.600" textAlign="center">
          Consultas
        </Heading>
      </motion.div>

      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          {/* Tipo de mensaje */}
          <FormControl isRequired>
            <FormLabel>Tipo de mensaje</FormLabel>
                <Input type="text" value={formData.tipo} disabled ></Input>
          </FormControl>

          {/* Opciones de denuncia solo si se elige "Denuncia" */}
          {formData.tipo === "Consulta" && (
            <FormControl isRequired>
              <FormLabel>Objetivo de consulta</FormLabel>
              <Select name="objetivo" value={formData.objetivo} onChange={handleChange}>
                <option value="">Selecciona una opción</option>
                <option value="Cotizacion">Consulta General</option>
                <option value="Solicitar ">Cotizacion</option>
              </Select>
            </FormControl>
          )}

          <FormControl isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="tucorreo@email.com" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Telefono</FormLabel>
            <Input type="number" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="tucorreo@email.com" />
          </FormControl>

          {/* Mensaje */}
          <FormControl isRequired>
            <FormLabel>Mensaje</FormLabel>
            <Textarea name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Escribe tu mensaje aquí..." rows={5} />
          </FormControl>

          {/* Botón de enviar */}
          <Button type="submit" colorScheme="teal" width="full" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Enviar Mensaje
          </Button>

        </VStack>
      </form>
    </MotionBox>
  );
};

export default Consulta;
