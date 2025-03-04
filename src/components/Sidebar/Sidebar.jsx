import React from "react";
import { Link } from "react-router-dom";
import { 
    Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, 
    DrawerCloseButton, VStack, useDisclosure, IconButton, Accordion, AccordionItem, 
    AccordionButton, AccordionPanel, Box, Heading, Flex, Menu, MenuButton, 
    MenuList, MenuItem, useMediaQuery 
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isDesktop] = useMediaQuery("(min-width: 1024px)"); // Detecta si la pantalla es grande

    const menuItems = [
        { title: "Inicio", link: "/" },
        {
            title: "Compañía",
            submenu: true,
            submenuItems: [
                { title: "Buenas Prácticas", link: "/buena-practica" },
                { title: "Políticas", link: "/politicas" },
                { title: "Leyes", link: "/leyes" },
            ]
        },
        {
            title: "Operaciones",
            submenu: true,
            submenuItems: [
                { title: "Sustentabilidad", link: "/sustentabilidad" },
                { title: "Faena", link: "/operacion-faena" }
            ]
        },
        {
            title: "Contactos",
            link:"/contacto-denuncia"
        },
        {
            title: "Intranet",
            link: "https://serving-sistemas.com/"
        },
    ];

    return (
        <>
            {isDesktop ? (
                // 📌 Navbar para pantallas grandes (fixed en la pantalla)
                <Flex 
                    as="nav" 
                    bg="gray.800" 
                    color="white" 
                    p={4} 
                    justify="space-between" 
                    align="center" 
                    shadow="md"
                    top="0"
                    left="0"
                    width="100%"
                    zIndex=""
                >
                    {/* Logo */}
                    <Link to="/">
                        <img src="src/assets/logo_transparente.png" alt="Logo" width="120px" />
                    </Link>

                    {/* Menú principal */}
                    <Flex gap={6}>
                        {menuItems.map((item, index) => (
                            item.submenu ? (
                                <Menu key={index}>
                                    <MenuButton as={Button} variant="ghost" color="white" _hover={{ bg: "gray.700" }} rightIcon={<ChevronDownIcon />}>
                                        {item.title}
                                    </MenuButton>
                                    <MenuList bg="gray.800" border="none">
                                        {item.submenuItems.map((subItem, subIndex) => (
                                            <MenuItem 
                                                key={subIndex} 
                                                as={Link} 
                                                to={subItem.link} 
                                                bg="gray.800"
                                                color="white"
                                                _hover={{ bg: "white", color: "blue.600" }} // Cambia el color al pasar el mouse
                                            >
                                                {subItem.title}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </Menu>
                            ) : (
                                <Button 
                                    key={index} 
                                    as={Link} 
                                    to={item.link} 
                                    variant="ghost" 
                                    color="white"
                                    _hover={{ bg: "gray.700" }}
                                >
                                    {item.title}
                                </Button>
                            )
                        ))}
                    </Flex>
                </Flex>
            ) : (
                // 📌 Menú hamburguesa para dispositivos móviles
                <>
                    <IconButton 
                        icon={<HamburgerIcon />} 
                        onClick={onOpen} 
                        position="fixed"
                        top="4" 
                        left="4" 
                        zIndex="1000" 
                        colorScheme="teal"
                        aria-label="Abrir menú de navegación"
                    />

                    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
                        <DrawerOverlay />
                        <DrawerContent bg="gray.800" color="white">
                            <DrawerCloseButton aria-label="Cerrar menú de navegación" color="white" />
                            <DrawerHeader borderBottomWidth="1px" borderColor="gray.700">
                                <Heading as="h2" size="lg">Menú</Heading>
                            </DrawerHeader>
                            <DrawerBody>
                                <VStack as="nav" align="start" spacing={4} role="navigation">
                                    <Box as="figure" w="full" textAlign="center" mb={4}>
                                        <img 
                                            src="src/assets/logo_transparente.png"  
                                            alt="Logo de Serving Sistemas" 
                                            className="mx-auto w-32 sm:w-40 md:w-48 max-w-full h-auto"
                                        />
                                    </Box>

                                    {menuItems.map((item, index) => (
                                        <Box key={index} w="full" as="section">
                                            {item.submenu ? (
                                                <Accordion allowToggle>
                                                    <AccordionItem border="none">
                                                        <h2>
                                                            <AccordionButton _expanded={{ bg: "gray.700" }}>
                                                                <Flex flex="1" textAlign="left" align="center" fontWeight="bold">
                                                                    {item.title}
                                                                    <ChevronDownIcon ml={2} />
                                                                </Flex>
                                                            </AccordionButton>
                                                        </h2>
                                                        <AccordionPanel>
                                                            {item.submenuItems.map((subItem, subIndex) => (
                                                                <Button 
                                                                    key={subIndex} 
                                                                    as={Link} 
                                                                    to={subItem.link} 
                                                                    onClick={onClose} 
                                                                    w="full" 
                                                                    variant="ghost"
                                                                    color="white"
                                                                    bg="gray.800"
                                                                    _hover={{ bg: "white", color: "blue.600" }} // Cambio de color en hover
                                                                >
                                                                    {subItem.title}
                                                                </Button>
                                                            ))}
                                                        </AccordionPanel>
                                                    </AccordionItem>
                                                </Accordion>
                                            ) : (
                                                <Button 
                                                    as={Link} 
                                                    to={item.link} 
                                                    onClick={onClose} 
                                                    w="full" 
                                                    variant="ghost"
                                                    color="white"
                                                    _hover={{ bg: "gray.700" }}
                                                >
                                                    {item.title}
                                                </Button>
                                            )}
                                        </Box>
                                    ))}
                                </VStack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </>
            )}
        </>
    );
};

export default Navbar;
