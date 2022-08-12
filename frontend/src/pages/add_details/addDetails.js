import {
  Heading,
  Container,
  Button,
  Stack,
  Flex,
  Image,
  Box,
  Center,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

import { Field, Form, Formik } from "formik";

import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import PerosonalDetails from "./personalForm";
import EducationDetails from "./educationForm";
function AddDetails() {
  const user = JSON.parse(localStorage.getItem("user")); //from localstorage
  if (!user) {
    console.log("no user in home");
    window.location.href = "/signup";
  }

  const [tabs, setTabs] = useState([
    {
      tabname: "personal",
      activeStatus: true,
    },
    {
      tabname: "education",
      activeStatus: false,
    },
    {
      tabname: "experience",
      activeStatus: false,
    },
    {
      tabname: "skills",
      activeStatus: false,
    },
  ]);

  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
    phone: "",
    collage: "",
    location: "",
    type: "",
    specialize: "",
  });
  const {
    name,
    description,
    email,
    phone,
    collage,
    location,
    type,
    specialize,
  } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  function changeIndex(index) {
    setIndex(index);
    const temp = [...tabs];
    temp.forEach((tab) => {
      tab.activeStatus = false;
    });
    temp[index].activeStatus = true;
    setTabs(temp);
  }

  const submit = async () => {
    await fetch("http://localhost:3001/api/formdetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        personal: {
          name: name,
          email: email,
          phone: phone,
          description: description,
        },
        education: {
          collage: collage,
          location: location,
          type: type,
          specialize: specialize,
        },
      }),
    }).then((res) => {
        res.text().then(async (text) => {
          const body = await JSON.parse(text);
          if (res.status === 200) {
            console.log(body.user);
            localStorage.setItem("user", JSON.stringify(body.user));
            // window.location.href = "/home"; //opens in same tab
          } else {
            console.log(body.message);
          }
        });
      }).catch((err) => console.log(err));
  };

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
                as={Box}
                pt={{ base: 20, md: "10%" }}
                textAlign={"left"}
                spacing={{ base: 1, md: 3 }}
              >
                <Heading
                  // textAlign={"center"}
                  fontWeight={"semibold"}
                  fontSize={{ base: "3xl", sm: "3xl", md: "3xl" }}
                >
                  {tabs[index].tabname} 📝
                </Heading>
                <Heading
                  color={"gray.700"}
                  fontWeight={"base"}
                  fontSize={{ base: "md ", sm: "xl", md: "xl" }}
                >
                  {user.education.collage === ""
                    ? "Plese fill all the details to create resume"
                    : "Update your resume"}
                </Heading>
              </Stack>
            </Container>
            <Container //Copy this container to add more
              px={{ md: 10, base: 5 }}
              maxW={"7xl"}
            >
              <Stack
                textAlign={"left"}
                spacing={{ base: 8, md: 4 }}
                py={{ base: 5, md: "2%" }}
              >
                <Grid
                  h={{ base: 5, md: "450px" }}
                  templateRows={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(1, 1fr)",
                  }}
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(5, 1fr)",
                  }}
                  gap={10}
                >
                  <GridItem
                    h={{ base: "full", md: "450px" }}
                    rowSpan={1}
                    colSpan={1}
                    // bg={"green.500"}
                  >
                    <Flex h={{ base: "full", md: "full" }}>
                      <Stack
                        position={{
                          base: "relative",
                          lg: "fixed",
                          sm: "relative",
                          md: "relative",
                        }}
                        mt={{ base: "0", md: "10" }}
                        direction={{ base: "row", md: "column" }}
                        spacing={{ base: "1", md: "5" }}
                      >
                        {tabs.map((tab, index) => {
                          return (
                            <Button
                              size={{ base: "xs", md: "md" }}
                              key={index}
                              onClick={() => {
                                changeIndex(index);
                              }}
                              isActive={tab.activeStatus}
                              _active={{
                                boxShadow: "xl",
                                bg: "purple.600",
                                color: "white",
                              }}
                              bg={"transparent"}
                              width={{ base: "full", md: "200px" }}
                            >
                              {tab.tabname}
                            </Button>
                          );
                        })}
                      </Stack>
                    </Flex>
                  </GridItem>
                  <GridItem
                    rowSpan={1}
                    colSpan={{ base: 1, md: 4 }}
                    // bg="green.500"
                  >
                    <Box
                      p={5}
                      borderLeft={"1px"}
                      borderLeftColor={"gray.200"}
                      //   rounded={"xl"}
                      //   shadow={"md"}
                      flex={"1"}
                      h={{ base: "full", md: "full" }}
                    >
                      {index === 0 ? (
                        <PerosonalDetails
                          changeIndex={changeIndex}
                          name={name}
                          description={description}
                          email={email}
                          phone={phone}
                          onChange={onChange}
                        />
                      ) : index === 1 ? (
                        <EducationDetails
                          changeIndex={submit}
                          collage={collage}
                          location={location}
                          type={type}
                          specialize={specialize}
                          onChange={onChange}
                        />
                      ) : (
                        <Text>Hello</Text>
                      )}
                    </Box>
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

export default AddDetails;
