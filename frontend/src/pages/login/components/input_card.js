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
import jwt from "jwt-decode";

const InputCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const apiUrl = "http://localhost:3001/api/login";

  const loginUser = async (event) => {
    event.preventDefault();

    const result = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        res.text().then(async (text) => {
          const body = await JSON.parse(text);
          if (res.status === 200) {
            showSuccessToast(body.message);
            const token = body.token;
            const user = jwt(token);
            localStorage.setItem("user", JSON.stringify(user.user));
            toHome(user);
            // window.location.href = "/home"; //opens in same tab
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
      title: "Logged in",
      description: des,
      position:"top-right",
      status: "success",
      duration: 5000,
    });
  };
  const showErrorToast = (des) => {
    toast({
      title: "Wrong credentials.",
      description: des,
      position:"top-right",
      status: "error",
      duration: 5000,
    });
  };

  return (
    <div>
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
            Signin
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
              loginUser(event);
            }}
          >
            Submit
          </Button>
        </Box>
      </Stack>
    </div>
  );
};

export default InputCard;
