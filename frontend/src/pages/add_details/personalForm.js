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
  Spacer
} from "@chakra-ui/react";

function PerosonalDetails({
  name,
  description,
  email,
  phone,
  changeIndex,
  isError,
  onChange,
}) {
  const toast = useToast();
  function checkEmpty() {
    if (name === "" || description === "" || email === "" || phone === "") {
      toast({
        title: "fill all details",
        position: "top-right",
        status: "error",
        duration: 5000,
      });
    } else {
      toast({
        title: "uploaded",
        position: "top-right",
        status: "success",
        duration: 5000,
      });
      changeIndex(1);
    }
  }

  return (
    <VStack align={"right"} spacing={5}>
      <FormControl isInvalid={isError}>
        <FormLabel>Name</FormLabel>
        <Input type="text" name="name" value={name} onChange={onChange} />
      </FormControl>

      <FormControl isInvalid={isError}>
        <FormLabel>Description</FormLabel>
        <Input
          type="text"
          name="description"
          value={description}
          onChange={onChange}
        />
      </FormControl>
      <FormControl isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" value={email} onChange={onChange} />
      </FormControl>
      <FormControl isInvalid={isError}>
        <FormLabel>Phone</FormLabel>
        <Input type="number" name="phone" value={phone} onChange={onChange} />
      </FormControl>
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
          Submit
        </Button>
      </HStack>
    </VStack>
  );
}

export default PerosonalDetails;
