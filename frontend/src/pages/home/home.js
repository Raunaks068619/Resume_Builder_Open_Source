import {
  Heading,
  Container,
  Button,
  Stack,
  Flex,
  Image,
  Box,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import { Link, useLocation } from "react-router-dom";
function Home() {
  // getting data from
  // + useNavigate()
  // + localstorage
  // + props
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user")); //from localstorage
  if (!user) {
    console.log("no user in home");
    window.location.href = "/signup";
  }
  // console.log(location.state);
  // console.log(localUser);
  // console.log(user.user);
  return (
    <>
      <Box>
        <Flex>
          <Navbar />
          <Container id="top" maxW={"7xl"}>
            <Container //Copy this container to add more
              px={{ md: 10, base: 5 }}
              // height={{ md: "xl", base: "lg" }}
              maxW={"7xl"}
            >
              <Stack
                direction={{ md: "row", base: "column" }}
                spacing={8}
                pt={{ base: 20, md: "10%" }}
                verticalAlign={"center"}
              >
                <Stack as={Box} textAlign={"left"} spacing={{ base: 2, md: 4 }}>
                  <Heading
                    // textAlign={"center"}
                    fontWeight={"semibold"}
                    fontSize={{ base: "5xl", sm: "5xl", md: "5xl" }}
                  >
                    Hi {user.name} 👋
                  </Heading>
                  <Heading
                    color={"gray.700"}
                    fontWeight={"base"}
                    fontSize={{ base: "md ", sm: "2xl", md: "2xl" }}
                  >
                    {user.education.collage=== ""
                      ? "Welcome to Resume-Builder free"
                      : "Select a template for your resume"}
                  </Heading>
                </Stack>
                <Link to="/adddetails">
                  <Button
                    rounded={"xl"}
                    bgGradient="linear(to-r, red.400,pink.400)"
                    colorScheme="linear(to-r, red.400,pink.400)"
                    color={"white"}
                    _hover={{
                      bgGradient: "linear(to-r, red.400,pink.400)",
                      boxShadow: "2xl",
                    }}
                    p={10}
                  >
                    + Add details
                  </Button>
                </Link>
              </Stack>
            </Container>
            <Container //Copy this container to add more
              px={{ md: 10, base: 5 }}
              // height={{ md: "xl", base: "lg" }}
              maxW={"7xl"}
            >
              <Stack
                // as={Box}
                textAlign={"left"}
                spacing={{ base: 8, md: 4 }}
                py={{ base: 5, md: "5%" }}
              >
                <Grid
                  templateColumns={{
                    md: "repeat(3, 1fr)",
                    sm: "repeat(2, 1fr)",
                    base: "repeat(1, 1fr)",
                  }}
                  gap={10}
                >
                  <GridItem onClick={() => {}}>
                    <Image
                      _hover={{ boxShadow: "2xl", cursor: "pointer" }}
                      rounded={"xl"}
                      shadow={"lg"}
                      objectFit="cover"
                      src="https://cdn-images.zety.com/templates/zety/valera-11-classic-silver-dark-332@3x.png"
                    />
                  </GridItem>
                </Grid>
              </Stack>
            </Container>
          </Container>
        </Flex>
      </Box>
    </>
  );
}

export default Home;
