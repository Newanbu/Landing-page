import React, { useState, useRef, useEffect } from "react";
import { 
  Box, Button, FormControl, FormLabel, Input, Textarea, Select, 
  Heading, VStack, Image as ChakraImage, useToast, Text
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const MotionBox = motion(Box);

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB en bytes

const Contacto = () => {
  const [formData, setFormData] = useState({
    tipo: "Contacto", 
    categoriaDenuncia: "",
    nombre: "",
    email: "",
    mensaje: "",
    personas:"",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();
  const toast = useToast();

  useEffect(() => {
    // Inicializar EmailJS
    emailjs.init("tlOrInwcGki5BJT2N");
  }, []);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const compressImage = async (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = document.createElement('img');
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          // Calcular las nuevas dimensiones manteniendo la proporción
          if (width > 800) {
            height *= 800 / width;
            width = 800;
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          // Convertir a base64 con calidad reducida
          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.5); // Reducida a 50% de calidad
          resolve(compressedBase64);
        };
      };
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Verificar el tamaño del archivo
    if (file.size > MAX_FILE_SIZE) {
      toast({
        title: "Error",
        description: "El archivo no debe superar 1MB",
        status: "error",
        duration: 3000,
        isClosable: true
      });
      e.target.value = null;
      return;
    }

    // Verificar el tipo de archivo
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Error",
        description: "Solo se permiten archivos de imagen (JPG, PNG, WEBP) y PDF",
        status: "error",
        duration: 3000,
        isClosable: true
      });
      e.target.value = null;
      return;
    }

    setSelectedFile(file);
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) {
      return;
    }

    // Validación: evitar campos vacíos
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        status: "error",
        duration: 3000,
        isClosable: true
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let fileData = null;
      let isImage = false;
      let fileType = "";

      if (selectedFile) {
        // Convertir archivo a Base64
        fileData = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(selectedFile);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });

        // Verificar si es una imagen
        isImage = selectedFile.type.startsWith('image/');
        fileType = selectedFile.type;

        // Si es una imagen y necesita compresión
        if (isImage && selectedFile.size > MAX_FILE_SIZE) {
          const compressedImage = await compressImage(selectedFile);
          fileData = compressedImage;
        }

        // Verificar tamaño final del archivo
        const base64Size = Math.ceil((fileData.length * 3) / 4);
        if (base64Size > 5000000) { // 5MB límite de EmailJS
          throw new Error("El archivo es demasiado grande incluso después de la compresión");
        }
      }

      // Crear objeto con datos
      const emailParams = {
        from_name: formData.nombre,
        to_name: "Administrador",
        tipo: formData.tipo,
        nombre: formData.nombre,
        email: formData.email,
        personas: formData.personas || "No especificado",
        categoriaDenuncia: formData.categoriaDenuncia || "N/A",
        mensaje: formData.mensaje,
        attachment: fileData,
        attachment_name: selectedFile ? selectedFile.name : "",
        content_type: fileType,
        isImage: isImage
      };

      // Enviar con EmailJS
      const response = await emailjs.send(
        "service_61ebmsx",
        "template_3rs5ovi",
        emailParams,
        "tlOrInwcGki5BJT2N"
      );

      console.log("Respuesta de EmailJS:", response);

      toast({
        title: "Mensaje enviado",
        description: "Tu mensaje ha sido enviado con éxito.",
        status: "success",
        duration: 3000,
        isClosable: true
      });

      // Limpiar el formulario
      setFormData({
        tipo: "Contacto",
        categoriaDenuncia: "",
        nombre: "",
        email: "",
        mensaje: "",
        personas: ""
      });
      setSelectedFile(null);
      if (formRef.current) {
        formRef.current.reset();
      }

    } catch (error) {
      console.error("Error detallado al enviar el mensaje:", error);
      toast({
        title: "Error",
        description: error.message || "No se pudo enviar el mensaje. Por favor, intenta con un archivo más pequeño o sin archivo adjunto.",
        status: "error",
        duration: 5000,
        isClosable: true
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <ChakraImage 
            src="/logo_transparente.webp" 
            alt="Logo de la Empresa" 
            w={{ base: 10, md: 14 }} 
          />
        </motion.div>

        {/* Título */}
        <Heading as="h2" size="lg" color="teal.600" textAlign="center">
          Contacto
        </Heading>
      </motion.div>

      <form ref={formRef} onSubmit={handleSubmit}>
        <VStack spacing={4}>
          {/* Tipo de mensaje */}
          <FormControl isRequired>
            <FormLabel>Tipo de Mensaje</FormLabel>
            <Input type="text" name="tipo" value={formData.tipo} disabled />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="tucorreo@email.com" />
          </FormControl>

          <FormControl>
            <FormLabel>Archivo (máx. 1MB)</FormLabel>
            <Text fontSize="sm" color="gray.600" mb={2}>
              Formatos permitidos: JPG, PNG, WEBP, PDF
            </Text>
            <Input
              type="file"
              name="file"
              onChange={handleFileChange}
              margin={5}
              accept=".pdf,.jpg,.jpeg,.png,.webp"
              sx={{
                '::file-selector-button': {
                  height: '100%',
                  padding: '0 20px',
                  background: 'teal.500',
                  border: 'none',
                  borderRadius: 'md',
                  color: 'white',
                  cursor: 'pointer',
                  '&:hover': {
                    bg: 'teal.600',
                  },
                },
              }}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Mensaje</FormLabel>
            <Textarea 
              name="mensaje" 
              value={formData.mensaje} 
              onChange={handleChange} 
              placeholder="Escribe tu mensaje aquí..." 
              rows={5} 
            />
          </FormControl>

          <Button 
            type="submit" 
            colorScheme="teal" 
            width="full" 
            isLoading={isSubmitting}
            loadingText="Enviando..."
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Enviar Mensaje
          </Button>
        </VStack>
      </form>
    </MotionBox>
  );
};

export default Contacto;
