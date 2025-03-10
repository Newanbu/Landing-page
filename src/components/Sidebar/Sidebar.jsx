import React, { useState } from "react";
import { 
    Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, 
    DrawerCloseButton, VStack, useDisclosure, IconButton, Accordion, AccordionItem, 
    AccordionButton, AccordionPanel, Box, Heading, Flex, Menu, MenuButton, 
    MenuList, MenuItem, useMediaQuery, Modal, ModalOverlay, ModalContent, 
    ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, 
    FormLabel, Input, Textarea, Image
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isDesktop] = useMediaQuery("(min-width: 1024px)");


    const menuItems = [
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
                { title: "Servicios", link: "/servicios" }
            ]
        },
        {
            title: "Contacto",
            submenu: true,
            submenuItems:[
                {title: "Contacto", link: "/contacto"},
                {title: "Denuncias", link: "/denuncia"},
                {title: "Consultas", link: "/consulta"},
            ]
        },
        {
            title: "FAQ",
            link: "/faq",
        },
        {
            title: "Intranet",
            link: "https://serving-sistemas.com/"
        },
    ];

    return (
        <>
            {isDesktop ? (
                <Flex 
                    as="nav" 
                    bg="gray.800" 
                    color="white" 
                    p={4} 
                    justify="center" // 🔹 Ahora el navbar está centrado en desktop
                    align="center" 
                    shadow="md"
                    top="0"
                    left="0"
                    width="100%"
                    zIndex="1000"
                >
                    <Flex align="center">
                        <Link to="/">
                            <img src="/logo_transparente.webp" alt="Logo" width="120px" className="mx-10"/>
                        </Link>
                    </Flex>

                    <Flex gap={6} textAlign="center"> 
                        {menuItems.map((item, index) => (
                            item.submenu ? (
                                <Menu key={index}>
                                    <MenuButton as={Button} variant="ghost" color="white" _hover={{ bg: "gray.700" }} rightIcon={<ChevronDownIcon />}>
                                        {item.title}
                                    </MenuButton>
                                    <MenuList bg="gray.800" border="none" textAlign="center">
                                        {item.submenuItems.map((subItem, subIndex) => (
                                            <MenuItem 
                                                key={subIndex} 
                                                as={Link} 
                                                to={subItem.link} 
                                                bg="gray.800"
                                                color="white"
                                                _hover={{ bg: "white", color: "blue.600" }}
                                            >
                                                {subItem.title}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </Menu>
                            ) : (
                                <Button 
                                    key={index} 
                                    as={item.link ? Link : undefined}
                                    onClick={item.action || undefined}
                                    to={item.link}
                                    variant="ghost" 
                                    color="white"
                                    _hover={{ bg: "gray.700" }}
                                    textAlign="center"
                                >
                                    {item.title}
                                </Button>
                            )
                        ))}
                    </Flex>
                </Flex>
            ) : (
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
                            <DrawerCloseButton color="white" />
                            <DrawerHeader textAlign="center">
                                <Heading size="lg">Menú</Heading>
                                <Link to="/">
                                    <img src="/logo_transparente.webp" alt="Logo" width="120px" className="mx-20 my-5"/>
                                </Link>
                            </DrawerHeader>
                            <DrawerBody>
                                <VStack spacing={4} align="center" w="full">
                                    {menuItems.map((item, index) => (
                                        item.submenu ? (
                                            <Accordion allowToggle key={index} w="full">
                                                <AccordionItem border="none">
                                                    <h2>
                                                        <AccordionButton _expanded={{ bg: "gray.700" }}>
                                                            <Flex flex="1" justify="center" align="center">
                                                                {item.title}
                                                                <ChevronDownIcon />
                                                            </Flex>
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel textAlign="center">
                                                        {item.submenuItems.map((subItem, subIndex) => (
                                                            <Button 
                                                                key={subIndex} 
                                                                as={Link} 
                                                                to={subItem.link} 
                                                                onClick={onClose} 
                                                                w="full" 
                                                                variant="ghost"
                                                                color="white"
                                                                _hover={{ bg: "gray.700" }}
                                                            >
                                                                {subItem.title}
                                                            </Button>
                                                        ))}
                                                    </AccordionPanel>
                                                </AccordionItem>
                                            </Accordion>
                                        ) : (
                                            <Button 
                                                key={index} 
                                                as={item.link ? Link : undefined}
                                                onClick={item.action || onClose}
                                                to={item.link}
                                                variant="ghost"
                                                color="white"
                                                w="full"
                                                _hover={{ bg: "gray.700" }}
                                                textAlign="center"
                                            >
                                                {item.title}
                                            </Button>
                                        )
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
