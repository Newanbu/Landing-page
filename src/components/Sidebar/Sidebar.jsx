import React, { useState } from "react";
import { 
    Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, 
    DrawerCloseButton, VStack, useDisclosure, IconButton, Accordion, AccordionItem, 
    AccordionButton, AccordionPanel, Box, Heading, Flex, Menu, MenuButton, 
    MenuList, MenuItem, useMediaQuery, Modal, ModalOverlay, ModalContent, 
    ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, 
    FormLabel, Input, Textarea, Select, useToast, Image
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {Link} from "react-router-dom"
import emailjs from "@emailjs/browser";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isModalOpen, onOpen: openModal, onClose: closeModal } = useDisclosure();
    const [isDesktop] = useMediaQuery("(min-width: 1024px)"); // Detecta si la pantalla es grande
    const toast = useToast();

    const [formData, setFormData] = useState({
        tipo: "contacto", 
        categoriaDenuncia: "",
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
        personas: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

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

        const emailParams = {
            tipo: formData.tipo || "Contacto",
            nombre: formData.nombre || "No proporcionado",
            email: formData.email || "No proporcionado",
            telefono: formData.telefono || "No especificado",
            personas: formData.personas || "No especificado",
            categoriaDenuncia: formData.categoriaDenuncia || "N/A",
            mensaje: formData.mensaje || "Mensaje vacío"
        };

        emailjs.send(
            "service_61ebmsx",
            "template_3rs5ovi",
            emailParams,
            "tlOrInwcGki5BJT2N"
        ).then(
            (response) => {
                toast({
                    title: "Mensaje enviado",
                    description: "Tu mensaje ha sido enviado con éxito.",
                    status: "success",
                    duration: 3000,
                    isClosable: true
                });
                setFormData({ tipo: "contacto", categoriaDenuncia: "", nombre: "", email: "", telefono: "", mensaje: "", personas: "" });
                closeModal();
            },
            (error) => {
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
                { title: "Servicios", link: "/servicios" }
            ]
        },
        {
            title: "Contacto",
            action: openModal // 🔹 Ahora abre el modal en lugar de navegar a otra página
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
                    justify="space-between" 
                    align="center" 
                    shadow="md"
                    top="0"
                    left="0"
                    width="100%"
                    zIndex="1000"
                >
                    <Link to="/">
                        <img src="/logo_transparente.webp" alt="Logo" width="120px" />
                    </Link>

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
                                                _hover={{ bg: "white", color: "blue.600" }}
                                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
                            </DrawerHeader>
                            <DrawerBody>
                                <VStack spacing={4} align="center">
                                    {menuItems.map((item, index) => (
                                        <Button 
                                            key={index} 
                                            as={item.link ? Link : undefined}
                                            onClick={item.action || onClose}
                                            to={item.link}
                                            variant="ghost"
                                            color="white"
                                            _hover={{ bg: "gray.700" }}
                                        >
                                            {item.title}
                                        </Button>
                                    ))}
                                </VStack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </>
            )}

            {/* 🔹 Modal para Contacto */}
            <Modal isOpen={isModalOpen} onClose={closeModal} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Contacto</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={4}>
                                <FormControl isRequired>
                                    <FormLabel>Nombre</FormLabel>
                                    <Input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" name="email" value={formData.email} onChange={handleChange} />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>telefono</FormLabel>
                                    <Input type="number" name="telefono" value={formData.telefono} onChange={handleChange} />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Mensaje</FormLabel>
                                    <Textarea name="mensaje" value={formData.mensaje} onChange={handleChange} />
                                </FormControl>

                                <Button type="submit" colorScheme="teal" width="full">
                                    Enviar
                                </Button>
                            </VStack>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Navbar;
