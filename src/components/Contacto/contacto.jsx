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

const ContactoDenuncia = () => {
  const [formData, setFormData] = useState({
    tipo: "contacto", // "contacto" o "denuncia"
    categoriaDenuncia: "",
    nombre: "",
    email: "",
    mensaje: "",
    personas:""
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
    if (!formData.nombre || !formData.email || !formData.mensaje || (formData.tipo === "denuncia" && !formData.categoriaDenuncia)) {
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
        tipo: formData.tipo || "Contacto",
        nombre: formData.nombre || "No proporcionado",
        email: formData.email || "No proporcionado",
        personas: formData.personas || "No especificado",
        categoriaDenuncia: formData.categoriaDenuncia || "N/A",
        mensaje: formData.mensaje || "Mensaje vacío"
    };

    // Enviar con EmailJS
    emailjs.send(
        "service_61ebmsx",   // 🔹 Reemplaza con tu SERVICE_ID
        "template_3rs5ovi",  // 🔹 Reemplaza con tu TEMPLATE_ID
        emailParams,
        "tlOrInwcGki5BJT2N"       // 🔹 Reemplaza con tu USER_ID
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
            setFormData({ tipo: "contacto", categoriaDenuncia: "", nombre: "", email: "", mensaje: "", personas: "" }); // 🔹 Limpia el formulario
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
          Contacto y Denuncias
        </Heading>
      </motion.div>

      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>

          {/* Seleccionar tipo de mensaje */}
          <FormControl isRequired>
            <FormLabel>Tipo de Mensaje</FormLabel>
            <Select name="tipo" value={formData.tipo} onChange={handleChange}>
              <option value="contacto">Contacto</option>
              <option value="denuncia">Denuncia ( Solo a gerente )</option>
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
