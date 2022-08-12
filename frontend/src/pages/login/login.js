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
  Center
} from "@chakra-ui/react";
import InputCard from "./components/input_card";
import Mesh from "./components/mesh";


export default function Login() {
  return (
    <Box position={"relative"}>
      
        <Mesh/>
     
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        // columns={{ base: 1, md: 1 }}
        // spacing={{ base: 10, lg: 32 }}
        pt={{ base: 10, sm: 20, lg: 28 }}
        px={{ base: 10, sm: 10, lg: 0 }}
      >
        <Center><InputCard/></Center>
      </Container>
    </Box>
  );
}
