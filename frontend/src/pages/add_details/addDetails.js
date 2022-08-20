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
import PerosonalDetails from "./forms/personalForm";
import EducationDetails from "./forms/educationForm";
import Tabs from "./tabs";
function AddDetails() {
  const user = JSON.parse(localStorage.getItem("user")); //from localstorage
  if (!user) {
    console.log("no user in home");
    window.location.href = "/signup";
  }
  const [tabIndex, setTabIndex] = useState(2);
  const qualificationTabs = ["Diploma", "Graduate", "PostGraduate"];
  const [highestQualification, setHighestQualification] = useState("Diploma");
  const [tabs, setTabs] = useState([
    {
      tabname: "Personal",
      activeStatus: true,
    },
    {
      tabname: "Education",
      activeStatus: false,
    },
    {
      tabname: "Experience",
      activeStatus: false,
    },
    {
      tabname: "Skills",
      activeStatus: false,
    },
  ]);

  const [index, setIndex] = useState(0);
  // personalForm functions
  const [personalData, setPersonalData] = useState({
    name: "",
    description: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
  });
  const { name, description, email, phone, gender, dob } = personalData;
  const onChangePersonal = (e) => {
    setPersonalData({
      ...personalData,
      [e.target.name]: e.target.value,
    });
  };
  //////
  // educationForm functions
  const [list, setList] = useState([
    {
      collage: "",
      passing: "",
      result: "",
      courseName: "",
      specialize: "",
    },
  ]);
  const onChangeList = (e, index) => {
    let tempList = [...list];
    tempList[index][e.target.name] = e.target.value;
    setList(tempList);
  };
  useEffect(() => {
    console.log(list);
  }, [list]);

  function changeQuali(i) {
    const temp = i;
    setHighestQualification(temp);
  }
  useEffect(() => {
    console.log(highestQualification);
  }, [highestQualification]);
  /////////

  function changeIndex(index) {
    console.log(personalData);
    // console.log(educationData);
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
        personal: personalData,
        education: {
          highestQualification: highestQualification,
          qualifications: list,
        },
      }),
    })
      .then((res) => {
        res.text().then(async (text) => {
          const body = await JSON.parse(text);
          if (res.status === 200) {
            console.log(body.user);
            const temp = body.user;
            localStorage.setItem("user", JSON.stringify(body.user));
            // window.location.href = "/home"; //opens in same tab
          } else {
            console.log(body.message);
          }
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box>
        <Flex>
          <Navbar />
          <Container id="top" maxW={"8xl"}>
            <Container //Copy this container to add more
              px={{ md: 10, base: 5 }}
              // height={{ md: "xl", base: "lg" }}
              maxW={"8xl"}
            >
              <Stack
                as={Box}
                pt={{ base: "10%", md: "9%" }}
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
              maxW={"8xl"}
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
                    <Tabs tabs={tabs} changeIndex={changeIndex} />
                  </GridItem>
                  <GridItem
                    rowSpan={1}
                    colSpan={{ base: 1, md: 3 }}
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
                          gender={gender}
                          dob={dob}
                          onChangePersonal={onChangePersonal}
                        />
                      ) : index === 1 ? (
                        <EducationDetails
                          changeIndex={changeIndex}
                          submit={submit}
                          tabIndex={tabIndex}
                          setTabIndex={setTabIndex}
                          qualificationTabs={qualificationTabs}
                          changeQuali={changeQuali}
                          list={list}
                          setList={setList}
                          onChangeList={onChangeList}
                        />
                      ) : (
                        <Text>Hello</Text>
                      )}
                    </Box>
                  </GridItem>
                  <GridItem
                    rowSpan={1}
                    colSpan={{ base: 1, md: 1 }}
                    // bg="green.500"
                  >
                    <Box
                      width="280px"
                      height="400px"
                      // flex={"1"}
                    >
                      <Box
                        position={{
                          base: "relative",
                          lg: "fixed",
                          sm: "relative",
                          md: "relative",
                        }}
                        border={"1px"}
                        borderColor="gray.100"
                        isActive
                        width="280px"
                        height="400px"
                        rounded={"xl"}
                        shadow={"xl"}
                        // flex={"1"}
                      ></Box>
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
