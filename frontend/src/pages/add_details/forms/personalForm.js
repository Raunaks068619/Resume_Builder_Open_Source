import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  useToast,
  VStack,
  HStack,
  Spacer,
  Grid,
  GridItem,
  Textarea,
} from "@chakra-ui/react";

function PerosonalDetails({
  name,
  description,
  email,
  phone,
  gender,
  dob,
  changeIndex,
  isError,
  onChange,
}) {
  const toast = useToast();
  function checkEmpty() {
    if (
      name === "" ||
      description === "" ||
      email === "" ||
      phone === "" ||
      gender === "" ||
      dob === ""
    ) {
      toast({
        title: "Fill all details",
        position: "top-right",
        status: "error",
        duration: 5000,
      });
    } else {
      toast({
        title: "Saved localy",
        position: "top-right",
        status: "success",
        duration: 5000,
      });
      changeIndex(1);
    }
  }

  return (
    <VStack align={"right"} spacing={5}>
      <Grid
        // templateRows={"repeat(5, 1fr)"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(1, 1fr)",
          xl: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={6}
      >
        <FormControl isInvalid={isError}>
          <FormLabel fontSize={"sm"} fontWeight={"semibold"} color={"gray.600"}>
            Name
          </FormLabel>
          <Input
            type="text"
            placeholder="Preffered Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </FormControl>

        <FormControl isInvalid={isError}>
          <FormLabel fontSize={"sm"} fontWeight={"semibold"} color={"gray.600"}>
            Email
          </FormLabel>
          <Input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            value={email}
            onChange={onChange}
          />
        </FormControl>
        <FormControl isInvalid={isError}>
          <FormLabel fontSize={"sm"} fontWeight={"semibold"} color={"gray.600"}>
            Phone
          </FormLabel>
          <Input
            type="number"
            placeholder="+(code) Mobile"
            name="phone"
            value={phone}
            onChange={onChange}
          />
        </FormControl>
        <FormControl isInvalid={isError}>
          <FormLabel fontSize={"sm"} fontWeight={"semibold"} color={"gray.600"}>
            Gender
          </FormLabel>
          <Input
            type="text"
            placeholder="Male / Female"
            name="gender"
            value={gender}
            onChange={onChange}
          />
        </FormControl>
        <FormControl isInvalid={isError}>
          <FormLabel fontSize={"sm"} fontWeight={"semibold"} color={"gray.600"}>
            DOB
          </FormLabel>
          <Input
            type="text"
            placeholder="DD / MM / YYYY"
            name="dob"
            value={dob}
            onChange={onChange}
          />
        </FormControl>
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <FormControl isInvalid={isError}>
            <FormLabel
              fontSize={"sm"}
              fontWeight={"semibold"}
              color={"gray.600"}
            >
              Description
            </FormLabel>
            <Textarea
              placeholder="Tell something about you, eg. some achivments, your future goals, etc."
              type="text"
              name="description"
              value={description}
              onChange={onChange}
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 2 }}>
          <HStack>
            <Spacer />
            <Button
              //   width={"200px"}
              bg={"purple.600"}
              mt={4}
              onClick={() => {
                checkEmpty();
              }}
              colorScheme="purple"
            >
              Save {"&"} Continue
            </Button>
          </HStack>
        </GridItem>
      </Grid>
    </VStack>
  );
}

export default PerosonalDetails;
