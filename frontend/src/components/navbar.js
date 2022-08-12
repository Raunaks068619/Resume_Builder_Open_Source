import { Container, HStack, Button, Spacer, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Menu from "./menu";

function Navbar() {
  return (
    <div>
      <Container
        top="0"
        right={0}
        left={0}
        bg={"white"}
        px={5}
        zIndex={10}
        pt={"2%"}
        position={"fixed"}
        maxW={"7xl"}
      >
        <HStack>
          <Menu />
          {window.location.href.replace("http://localhost:3000/", "") ===
          "adddetails" ? (
            <Link to="/home">
              <Button>Home</Button>
            </Link>
          ) : (
            <Text></Text>
          )}
          <Spacer />
          <Button
            colorScheme="black"
            rounded={"xl"}
            bg={"black"}
            color={"white"}
          >
            github
          </Button>
          <Button
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.setItem(
                "user",
                JSON.stringify({
                  name: "",
                  email: "",
                  password: "",
                  personal: {
                    name: "",
                    email: "",
                    phone: "",
                    description: "",
                  },
                  education: {
                    collage: "",
                    location: "",
                    type: "",
                    specialize: "",
                  },
                })
              );
              window.location.href = "/login";
            }}
            ml={"5"}
            rounded={"xl"}
            colorScheme="red"
            variant="outline"
          >
            Logout
          </Button>
        </HStack>
      </Container>
    </div>
  );
}
export default Navbar;
