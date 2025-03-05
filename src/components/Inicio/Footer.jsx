import React from "react";
import { Box, Flex, Text, Link, VStack, Heading, Image } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box bg="gray.800" color="white" py={6} px={{ base: 4, md: 10 }} textAlign="center">
            <Flex 
                direction={{ base: "column", md: "row" }} 
                justify="space-between" 
                align="center"
                wrap="wrap"
            >
                {/* Logo y Dirección */}
                <VStack align={{ base: "center", md: "start" }} spacing={3} mb={{ base: 6, md: 0 }}>
                    <Image src="/logo_transparente.webp" alt="Logo Serving" w={{ base: 24, md: 32 }} />
                    <Text fontSize="sm">Chorrillos 937, Calama</Text>
                    <Text fontSize="sm">Teléfono: +56 55 254 00 84</Text>
                </VStack>

                {/* Contactos */}
                <VStack align="start" spacing={2} textAlign={{ base: "center", md: "left" }}>
                    <Heading as="h3" size="sm" mb={2}>Contacto</Heading>
                    <Text fontSize="sm">Cristian Jimenez: +56 9 8596 7857</Text>
                    <Text fontSize="sm">Elias Miranda: +56 9 3460 2057</Text>
                    <Text fontSize="sm">
                        Email general: <Link href="mailto:administracion@servingcl.org" color="teal.300">
                            administracion@servingcl.org
                        </Link>
                    </Text>
                    <Text fontSize="sm">
                        Catalina Chavez: <Link href="mailto:cchavez@sclcorp.cl" color="teal.300">
                            cchavez@sclcorp.cl
                        </Link>
                    </Text>
                    <Text fontSize="sm">
                        Bryan Godoy: <Link href="mailto:bgodoy@sclcorp.cl" color="teal.300">
                            bgodoy@sclcorp.cl
                        </Link>
                    </Text>
                    <Text fontSize="sm">
                        Camilo Araya: <Link href="mailto:caraya@sclcorp.cl" color="teal.300">
                            caraya@sclcorp.cl
                        </Link>
                    </Text>
                </VStack>

                {/* Mapa */}
                <Box w={{ base: "100%", md: "300px" }} mt={{ base: 6, md: 0 }}>
                    <Heading as="h3" size="sm" mb={2}>Ubicación</Heading>
                    <iframe
                        title="Mapa ubicación"
                        width="100%"
                        height="200"
                        style={{ borderRadius: "8px" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.346201484831!2d-68.92630108514562!3d-22.455325479607987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a8b99f9c2c2f4d%3A0xf9f9e6b9a32a9a1!2sChorrillos%20937%2C%20Calama%2C%20Antofagasta%2C%20Chile!5e0!3m2!1ses-419!2sus!4v1648484678945!5m2!1ses-419!2sus"
                        allowFullScreen
                    ></iframe>
                </Box>
            </Flex>

            {/* Línea separadora y derechos reservados */}
            <Box mt={6} borderTop="1px" borderColor="gray.600" pt={4}>
                <Text fontSize="xs">© {new Date().getFullYear()} Serving Consultores LTDA. Todos los derechos reservados.</Text>
            </Box>
        </Box>
    );
};

export default Footer;