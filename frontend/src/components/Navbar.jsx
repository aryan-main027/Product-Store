import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import { FiPlusSquare } from "react-icons/fi";
import { FaMoon , FaSun } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {

  const {colorMode , toggleColorMode} = useColorMode()
  const MotionBox = motion.div;

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{
          base : "column",
          md : "row"
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
                <FiPlusSquare fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode} position="relative" overflow="hidden" _hover={{ transform: "rotate(15deg)" }}transition="0.2s">
            <AnimatePresence mode="wait">
              <MotionBox
                key={colorMode}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex" }}
              >
                {colorMode === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
              </MotionBox>
            </AnimatePresence>
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar