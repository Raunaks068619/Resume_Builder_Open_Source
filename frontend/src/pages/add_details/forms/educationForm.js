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
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function EducationDetails({
  result,
  collage,
  passing,
  courseName,
  specialize,
  submit,
  onChange,
  // tabData,
  changeIndex,
  tabIndex,
  setTabIndex,
  qualificationTabs,
}) {
  const toast = useToast();
  function checkEmpty() {
    if (
      collage === "" ||
      passing === "" ||
      courseName === "" ||
      specialize === ""
    ) {
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
      // submit();
      //  the function to send Data to server
    }
  }

  function handleClick(index) {
    setTabIndex(index);
  }
  return (
    <VStack align={"right"} spacing={5}>
      <Grid
        // templateRows={"repeat(5, 1fr)"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={6}
      >
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <FormControl>
            <FormLabel
              fontSize={"sm"}
              fontWeight={"semibold"}
              color={"gray.600"}
            >
              Highest qualification / Course Pursuing
            </FormLabel>
            <Tabs
            defaultIndex={tabIndex}
              onChange={(index) => {
                handleClick(index);
              }}
              variant="soft-rounded"
              colorScheme="purple"
            >
              <TabList>
                {qualificationTabs.map((qualification, index) => {
                  return (
                    <Tab
                      key={index}
                      fontSize={"sm"}
                      fontWeight={"semibold"}
                      color={"gray.600"}
                      p={2}
                    >
                      {qualification}
                    </Tab>
                  );
                })}
              </TabList>
            </Tabs>
          </FormControl>
        </GridItem>
        <FormControl>
          <FormLabel fontSize={"sm"} fontWeight={"semibold"} color={"gray.600"}>
            Collage Name
          </FormLabel>
          <Input
            type="text"
            name="collage"
            value={collage}
            onChange={onChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize={"sm"} fontWeight={"semibold"} color={"gray.600"}>
            Passing Year
          </FormLabel>
          <Input
            type="text"
            name="passing"
            value={passing}
            onChange={onChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"sm"} fontWeight={"semibold"} color={"gray.600"}>
            Course Name
          </FormLabel>
          <Input
            placeholder="eg. B.E, B.Tech, M.E, M.Tech"
            type="text"
            name="courseName"
            value={courseName}
            onChange={onChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"sm"} fontWeight={"semibold"} color={"gray.600"}>
            Specialization
          </FormLabel>
          <Input
            type="text"
            name="specialize"
            value={specialize}
            onChange={onChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"sm"} fontWeight={"semibold"} color={"gray.600"}>
            Result (CGPA/Percentage)
          </FormLabel>
          <Input type="text" name="result" value={result} onChange={onChange} />
        </FormControl>

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
              Submit
            </Button>
          </HStack>
        </GridItem>
      </Grid>
    </VStack>
  );
}

export default EducationDetails;
