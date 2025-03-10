import { motion } from "framer-motion";
import { Button,Flex,Text, Box, Image, Modal, ModalOverlay,Heading, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Diagram from "./Diagrama";



const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const slideInUp = {
    hidden: { opacity: 0, y: 100 }, // 🔹 Inicia desde abajo con opacidad 0
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: "easeOut" } // 🔹 Suaviza la animación
    }
};



const Inicio = () => {


    const { isOpen, onOpen, onClose } = useDisclosure();

    const servicios = [
        {
            title: "Alta Calidad",
            description: "Ofrecemos soluciones con los más altos estándares de calidad para garantizar la excelencia en cada proyecto.",
            image: "/Trabajo1.webp"
        },
        {
            title: "Mejoras Continuas",
            description: "Nuestro equipo se mantiene en constante aprendizaje y actualización, asegurando soluciones innovadoras y efectivas para cada desafío.",
            image: "/Trabajo2.webp"
        },
        {
            title: "Tecnología Avanzada",
            description: "Utilizamos tecnología de vanguardia para ofrecer soluciones innovadoras y eficientes a nuestros clientes.",
            image: "/Trabajo3.webp"
        }
    ];

    const certificaciones = [
        {
            title: "ISO 14001: 2004",
            description: "ISO 14001:2004, tiene el propósito de apoyar la aplicación de un plan de manejo ambiental en cualquier organización del sector público o privado.",
            image: "/sustainability1.webp"
        },
        {
            title: "OHSAS 18001: 2007",
            description: "OHSAS 18001:2007, contempla Evaluación de Higiene y Seguridad Ocupacional, siendo un estándar internacional el cual define los requisitos relacionados a los sistemas de higiene y seguridad lo cual le permite a una organización controlar sus riesgos y mejorar el desempeño.",
            image: "/sustainability2.webp"
        },
        {
            title: "ISO 9001: 2008",
            description: "ISO 9001:2008, es la base del sistema de gestion de la calidad ya que es una norma internacional y que se centra en todos los elementos de administración de calidad con los que una empresa debe contar para tener un sistema efectivo que le permita administrar y mejorar la calidad de sus productos o servicios.",
            image: "/sustainability3.webp"
        },
        {
            title: "Responsabilidad Social Corporativa",
            description: "La responsabilidad social corporativa de Serving Consultores LTDA. abarca la calidad, salud, seguridad y cuidado del medio ambiente, así como la ética empresarial, los derechos humanos, la no discriminación y la lucha contra la corrupción. Tenemos como objetivo el desarrollo sostenible para nuestros clientes, empleados y las comunidades en las que operamos mediante el equilibrio de los resultados financieros y la responsabilidad social de las empresas dentro de nuestra esfera de influencia.",
            image: "/RSC.webp"
        }
    ];

    const filosofia = [
        {
            title: "Visión",
            description: "Ser reconocidos por nuestra agilidad en superar las expectativas de nuestros clientes al crear valor sustentable.",
            image: "/vision.webp"
        },
        {
            title: "Misión",
            description: "Proveer en forma confiable, rápida y transparente, la gestión de servicios a la industria minera, en equilibrio con el entorno donde nos encontremos.",
            image: "/mision.webp"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                    
            {/* Hero Section */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="text-center mb-10 mt-20 text-4xl font-bold"
            >
                <Box className="mt-6">
                    <Image src="/logo_transparente.webp" alt="Logo Serving" className="mx-auto" style={{ backgroundColor: "transparent" }} />
                </Box>
                <h1 className="text-4xl font-bold text-gray-800">Bienvenido a Serving Consultores</h1>
                <p className="mt-4 text-lg text-gray-600">Descubre nuestros servicios y soluciones innovadoras</p>
            </motion.div>

            {/* Carousel Section */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInUp} // 🔹 Usa la nueva animación de entrada
                className="w-full max-w-screen-xl mt-10"
            >
                <Box 
                    borderRadius="lg" 
                    overflow="hidden" 
                    boxShadow="lg"
                    p={2}
                >
                    <Carousel 
                        showThumbs={false} 
                        autoPlay 
                        infiniteLoop 
                        className="shadow-lg"
                    >
                        <div>
                            <Image 
                                src="/serving2.webp" 
                                alt="Slide 1" 
                                borderRadius="lg" 
                                height="500px" 
                                width="100%" 
                                objectFit="cover" 
                            />
                        </div>
                        <div>
                            <Image 
                                src="/Trabajo7.webp" 
                                alt="Slide 2" 
                                borderRadius="lg" 
                                height="500px" 
                                width="100%" 
                                objectFit="cover" 
                            />
                        </div>
                        <div>
                            <Image 
                                src="/Trabajo6.webp" 
                                alt="Slide 3" 
                                borderRadius="lg" 
                                height="500px" 
                                width="100%" 
                                objectFit="cover" 
                            />
                        </div>
                    </Carousel>
                </Box>
            </motion.div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="m-10 p-10 text-3xl flex justify-center"  // 🔹 Se agregó padding (p-6)
            >
                <motion.button
                    whileHover={{ scale: 1.2, boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.8)" }}  
                    whileTap={{ scale: 0.9 }}   
                    animate={{
                        backgroundColor: ["#001f3f", "#0074D9", "#39CCCC", "#3D99F5", "#4FC3F7", "#00BFFF", "#001f3f"], // 🔹 Tonos azul y celeste
                        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } 
                    }}
                    className="m-2 px-6 text-2xl font-bold text-white rounded-2xl shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-blue-400 border-none"
                    
                    onClick={()=>{
                        onOpen()
                    }}
                >
                    Sobre Nosotros
                </motion.button>
            </motion.div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="text-center mt-16 text-3xl font-bold"
            >
                <h2 className="text-3xl font-bold text-gray-800">Filosofía de la empresa</h2>
            </motion.div>
                 {/* Filosofía de la Empresa */}
                 <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="p-6 bg-white rounded-lg shadow-lg text-center max-w-4xl mt-20"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filosofia.map((item, index) => (
                        <div key={index} className="p-4 bg-gray-100 rounded-lg shadow text-center">
                            <Image src={item.image} alt={item.title} borderRadius="md" boxSize="250px" objectFit="cover" className="mx-auto mb-4" />
                            <Heading size="md"> {item.title} </Heading>
                            <p className="mt-2 text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="text-center mt-16 text-3xl font-bold"
            >
                <h2 className="text-3xl font-bold text-gray-800">Beneficios</h2>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
                {servicios.map((servicio, index) => (
                    <motion.div 
                        key={index} 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="p-6 bg-white rounded-lg shadow-lg text-center"
                    >
                        <Image src={servicio.image} alt={servicio.title} borderRadius="md" boxSize="250px" objectFit="cover" className="mx-auto mb-4" />
                        <Heading size="md" > {servicio.title} </Heading>
                        <p className="mt-2 text-gray-600">{servicio.description}</p>
                    </motion.div>
                ))}
            </div>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="m-10 p-10 text-3xl flex justify-center"  // 🔹 Se agregó padding (p-6)
            >
                <motion.button
                    whileHover={{ scale: 1.2, boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.8)" }}  
                    whileTap={{ scale: 0.9 }}   
                    animate={{
                        backgroundColor: ["#001f3f", "#0074D9", "#39CCCC", "#3D99F5", "#4FC3F7", "#00BFFF", "#001f3f"], // 🔹 Tonos azul y celeste
                        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } 
                    }}
                    className="m-2 px-6 py-3 text-2xl font-bold text-white rounded-2xl shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-blue-400 border-none"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                   <Link to="/servicios"> Descubre Nuestro Servicios </Link>
                </motion.button>
            </motion.div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="text-center mt-16 text-3xl font-bold"
            >
            <h2 className="text-3xl font-bold text-green-800">Compromiso con la Sustentabilidad</h2>
            <p className="mt-4 text-lg text-green-700">Nos dedicamos a implementar prácticas sostenibles para un mejor futuro.</p>
            </motion.div>
            {/* Sustainability Section */}
            {/* Sustentabilidad y Certificaciones */}
            <div className="mt-16 bg-green-200 py-12 px-6 w-full text-center">

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-6">
                    {certificaciones.map((cert, index) => (
                        <motion.div 
                            key={index} 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInVariants}
                            className="p-6 bg-white rounded-lg shadow-md text-center"
                        >
                            <Image src={cert.image} alt={cert.title} boxSize="150px" width="100%" objectFit="contain" className="mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-green-700">{cert.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ base: "full", md: "6xl" }}>
    <ModalOverlay />
    <ModalContent w={{ base: "95%", md: "80%" }} maxW="6xl" maxH="80vh">
        <ModalHeader textAlign="center" fontSize={{ base: "xl", md: "2xl" }}>
            ¿Quiénes Somos?
        </ModalHeader>
        <ModalCloseButton />
        
        {/* Se agregó overflowY para hacer scroll si el contenido es grande */}
        <ModalBody overflowY="auto">
            <Flex direction={{ base: "column", md: "row" }} align="center" justify="center">
                
                {/* Diagrama */}
                <Box 
                    flex="2" 
                    p={3} 
                    w={{ base: "100%", md: "60%" }} 
                    h={{ base: "auto", md: "500px" }} 
                    mb={{ base: 4, md: 0 }}
                >
                    <Diagram />
                </Box>

                {/* Descripción */}
                <Box 
                    flex="1" 
                    p={{ base: 3, md: 5 }} 
                    textAlign="justify" 
                    w={{ base: "100%", md: "40%" }} 
                >
                    <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" mb={4} textAlign="center">
                        Nuestra Empresa
                    </Text>
                    <Text fontSize={{ base: "sm", md: "md" }}>
                        Serving Consultores LTDA es una empresa de ingeniería y consultoría fundada en 2007 en Calama, 
                        con el objetivo de brindar servicios de calidad a la mediana y gran minería chilena. <br /><br />
                        Su misión es proveer productos y servicios confiables e innovadores, mientras que su visión es 
                        convertirse en un referente en ingeniería, geología y consultoría en Latinoamérica. <br /><br />
                        Cuenta con un equipo multidisciplinario de profesionales con amplia experiencia en la industria minera, 
                        además de ofrecer oportunidades a nuevos talentos. Su trabajo se basa en cuatro valores clave: 
                        interacción y convivencia, mejora continua, adaptación al cambio y colaboración con el cliente.
                    </Text>
                </Box>
            </Flex>
        </ModalBody>

        <ModalFooter justifyContent="center">
            <Button colorScheme="red" onClick={onClose}>Cerrar</Button>
            <Button 
                colorScheme="teal" 
                as="a" 
                fontWeight="bold" 
                px={6}
                mx={2}
                _hover={{ bg: "teal.600", color: "white" }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <Link to="/contacto"> Contáctanos!</Link>
            </Button>
        </ModalFooter>
    </ModalContent>
</Modal>

    </div>

      
    );
};

export default Inicio;
