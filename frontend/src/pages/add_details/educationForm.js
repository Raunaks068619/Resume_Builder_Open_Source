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
} from "@chakra-ui/react";

function EducationDetails({
  collage,
  location,
  type,
  specialize,
  changeIndex,
  onChange,
}) {
  const toast = useToast();
  function checkEmpty() {
    if (collage === "" || location === "" || type === "" || specialize === "") {
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
      changeIndex(2);
      //  the function to send Data to server
    }
  }

  return (
    <VStack align={"right"} spacing={5}>
      <FormControl>
        <FormLabel>Collage Name</FormLabel>
        <Input type="text" name="collage" value={collage} onChange={onChange} />
      </FormControl>

      <FormControl>
        <FormLabel>Location</FormLabel>
        <Input
          type="text"
          name="location"
          value={location}
          onChange={onChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Type of Education</FormLabel>
        <Input type="text" name="type" value={type} onChange={onChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Specialization</FormLabel>
        <Input
          type="text"
          name="specialize"
          value={specialize}
          onChange={onChange}
        />
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

export default EducationDetails;
