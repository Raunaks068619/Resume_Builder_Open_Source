import {
  Stack,
  Heading,
  Text,
  Box,
  Button,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const InputCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const apiUrl = "http://localhost:3001/api/register";

  const registerUser = async (event) => {
    event.preventDefault();

    const result = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        personal: {
          name: "",
          email: "",
          phone: "",
          gender: "",
          dob: "",
          description: "",
        },
        education: {
          highestQualification: "",
          qualifications: [
            // {
            //   result: "",
            //   collage: "",
            //   passing: "",
            //   courseName: "",
            //   specialize: "",
            // },
          ],
        },
      }),
    })
      .then((res) => {
        res.text().then(async (text) => {
          const body = await JSON.parse(text);
          if (res.status === 200) {
            showSuccessToast(body.message);
            console.log(body.user);
            localStorage.setItem("user", JSON.stringify(body.user));
            // window.location.href = "/home"; //opens in same tab
            toHome(body.user);
          } else {
            showErrorToast(body.message);
          }
        });
      })
      .catch((err) => console.log(err));
    console.log(result);
  };

  const toHome = (user) => {
    navigate("/", { state: { user } });
  };

  const showSuccessToast = (des) => {
    toast({
      title: "Successfully registered",
      description: des,
      position: "top-right",
      status: "success",
      duration: 5000,
    });
  };
  const showErrorToast = (des) => {
    toast({
      title: "Not registered",
      description: des,
      position: "top-right",
      status: "error",
      duration: 5000,
    });
  };

  const checkPassword = (event) => {
    registerUser(event);
  };

  return (
    <Stack
      shadow={"xl"}
      bg={"white"}
      rounded={"2xl"}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      maxW={{ lg: "lg" }}
    >
      <Stack spacing={4}>
        <Heading
          color={"gray.800"}
          lineHeight={1.1}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        >
          Join to start now
          <Text
            as={"span"}
            bgGradient="linear(to-r, red.400,pink.400)"
            bgClip="text"
          >
            !
          </Text>
        </Heading>
        {/* <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
          We’re looking for amazing engineers just like you! Become a part of
          our rockstar engineering team and skyrocket your career!
        </Text> */}
      </Stack>
      <Box as={"form"} mt={10}>
        <Stack spacing={4}>
          <Input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Name"
            bg={"gray.100"}
            border={0}
            color={"gray.500"}
            _placeholder={{
              color: "gray.500",
            }}
          />
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
            bg={"gray.100"}
            border={0}
            color={"gray.500"}
            _placeholder={{
              color: "gray.500",
            }}
          />
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            bg={"gray.100"}
            border={0}
            color={"gray.500"}
            _placeholder={{
              color: "gray.500",
            }}
          />
          <Input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            placeholder="Confirm password"
            bg={"gray.100"}
            border={0}
            color={"gray.500"}
            _placeholder={{
              color: "gray.500",
            }}
          />
        </Stack>
        <Button
          fontFamily={"heading"}
          mt={8}
          w={"full"}
          bgGradient="linear(to-r, red.400,pink.400)"
          color={"white"}
          _hover={{
            bgGradient: "linear(to-r, red.400,pink.400)",
            boxShadow: "xl",
          }}
          onClick={(event) => {
            checkPassword(event);
          }}
        >
          Submit
        </Button>
      </Box>
    </Stack>
  );
};

export default InputCard;
