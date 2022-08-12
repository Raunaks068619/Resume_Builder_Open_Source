import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import Hero from "./components/hero";
import InputCard from "./components/input_card";
import Mesh from "./components/mesh";



const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

export default function SignUp() {
  return (
    <Box position={"relative"}>
      
        <Mesh/>
     
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        pt={{ base: 10, sm: 20, lg: 28 }}
        px={{ base: 10, sm: 10, lg: 0 }}
      >
        <Hero avatars={avatars}/>
        <InputCard/>
      </Container>
    </Box>
  );
}

