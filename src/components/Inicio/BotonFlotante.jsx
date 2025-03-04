import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        right: "20px",
        bottom: "50px",
        zIndex: 1000
      }}
    >
      <Button 
        colorScheme="teal"
        size="lg"
        borderRadius="full"
        onClick={scrollToTop}
        rightIcon={<ArrowUpIcon />}
        _hover={{ bg: "teal.500", transform: "scale(1.1)" }}
        as={motion.button}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        Inicio
      </Button>
    </motion.div>
  );
};

export default ScrollToTopButton;