import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Heading, List, ListItem, Text } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { motion } from "framer-motion";
import {Link} from "react-router-dom"
const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const MotionBox = motion(Box);

const Faq = () => {
    return (
    <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-center mb-12"
            >
                <Heading>Preguntas Frecuentes</Heading>
            </motion.div>
            
            <Accordion allowToggle>
                {[
                    {
                        question: "¿Cuáles son los servicios principales que ofrece Serving Consultores?",
                        answer: (
                            <>
                                <Text mb={2}>Serving Consultores ofrece servicios de ingeniería y consultoría especializados en minería, incluyendo:</Text>
                                <List spacing={2} pl={4}>
                                    <ListItem>• Servicios de geología y minería</ListItem>
                                    <ListItem>• Consultoría en sustentabilidad</ListItem>
                                    <ListItem>• Servicios de ingeniería</ListItem>
                                    <ListItem>• Asesoría técnica especializada</ListItem>
                                </List>
                            </>
                        )
                    },
                    {
                        question: "¿Cómo puedo realizar una denuncia o consulta?",
                        answer: "Puede realizar denuncias o consultas a través de nuestro sistema en línea en la sección de Contacto."
                    },
                    {
                        question: "¿Qué certificaciones tiene la empresa?",
                        answer: "Contamos con certificaciones internacionales que avalan nuestro compromiso con la calidad y la sustentabilidad. Puede consultar nuestras certificaciones vigentes en la sección de Sustentabilidad."
                    },
                    {
                        question: "¿Cómo puedo trabajar en Serving Consultores?",
                        answer: (
                            <>
                                <Text mb={2}>Si está interesado en formar parte de nuestro equipo de trabajo, puede enviar su currículum vitae a través de nuestro formulario de contacto. También puede revisar las ofertas de empleo disponibles </Text>
                                <Link to="https://www.linkedin.com/company/serving-consultores-ltda/">Haz Click Aquí</Link>
                            </>
                        )
                    },
                    {
                        question: "¿Cuál es el alcance geográfico de sus servicios?",
                        answer: "Operamos principalmente en Chile, con sede en Calama, pero nuestros servicios se extienden a toda la región. Contamos con la capacidad de atender proyectos en diferentes ubicaciones según las necesidades del cliente."
                    }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        animate="visible"
                        variants={slideInLeft}
                        transition={{ delay: index * 0.1 }}
                    >
                        <AccordionItem>
                            <h2>
                                <AccordionButton 
                                    className="hover:bg-gray-50"
                                    as={motion.button}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    <Box flex="1" textAlign="left" py={4}>
                                        {item.question}
                                    </Box>
                                    <ChevronDownIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {item.answer}
                            </AccordionPanel>
                        </AccordionItem>
                    </motion.div>
                ))}
            </Accordion>
        </div>
    </div>
    )
}

export default Faq;



