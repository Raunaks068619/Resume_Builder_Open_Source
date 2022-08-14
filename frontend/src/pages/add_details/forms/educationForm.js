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
  // result,
  // collage,
  // passing,
  // courseName,
  // specialize,
  submit,
  // onChangeEducation,
  // tabData,
  changeIndex,
  tabIndex,
  setTabIndex,
  qualificationTabs,
  changeQuali,
  list,
  setList,
  onChangeList,
}) {
  const toast = useToast();
  function checkEmpty() {
    if (
      list.collage === "" ||
      list.passing === "" ||
      list.courseName === "" ||
      list.specialize === ""
    ) {
      toast({
        title: "Fill all details",
        position: "top-right",
        status: "error",
        duration: 5000,
      });
    } else {
      toast({
        title: "Saved locally",
        position: "top-right",
        status: "success",
        duration: 5000,
      });
      
      // changeIndex(2);
      // submit();
      //  the function to send Data to server
    }
  }
  function handleChange(index) {
    setTabIndex(index);
    // console.log(tabIndex)
    changeQuali(qualificationTabs[index]);
  }

  return (
    <VStack align={"right"} spacing={5}>
      {/* <Grid
        // templateRows={"repeat(5, 1fr)"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
        }}
        gap={6}
      > */}
        {/* <GridItem colSpan={{ base: 1, md: 2 }}> */}
          <FormControl>
            <FormLabel
              fontSize={"sm"}
              fontWeight={"semibold"}
              color={"gray.600"}
            >
              Highest qualification / Course Pursuing
            </FormLabel>
            <Tabs
              // defaultIndex={tabIndex}
              onChange={(index) => {
                handleChange(index);
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
                      color={"gray.600"}
                      fontWeight={"3px"}
                      p={2}
                    >
                      {qualification}
                    </Tab>
                  );
                })}
              </TabList>
            </Tabs>
          </FormControl>
        {/* </GridItem> */}
        {list.map((item, index) => {
          return (
            <div key={index}>
              <Grid
                // templateRows={"repeat(5, 1fr)"}
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                }}
                gap={6}
              >
                <FormControl>
                  <FormLabel
                    fontSize={"sm"}
                    fontWeight={"semibold"}
                    color={"gray.600"}
                  >
                    Collage Name
                  </FormLabel>
                  <Input
                    type="text"
                    name="collage"
                    value={item.collage}
                    onChange={(e)=>{onChangeList(e,index)}}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontSize={"sm"}
                    fontWeight={"semibold"}
                    color={"gray.600"}
                  >
                    Passing Year
                  </FormLabel>
                  <Input
                    type="text"
                    name="passing"
                    value={item.passing}
                    onChange={(e)=>{onChangeList(e,index)}}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontSize={"sm"}
                    fontWeight={"semibold"}
                    color={"gray.600"}
                  >
                    Course Name
                  </FormLabel>
                  <Input
                    placeholder="eg. B.E, B.Tech, M.E, M.Tech"
                    type="text"
                    name="courseName"
                    value={item.courseName}
                    onChange={(e)=>{onChangeList(e,index)}}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontSize={"sm"}
                    fontWeight={"semibold"}
                    color={"gray.600"}
                  >
                    Specialization
                  </FormLabel>
                  <Input
                    type="text"
                    name="specialize"
                    value={item.specialize}
                    onChange={(e)=>{onChangeList(e,index)}}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontSize={"sm"}
                    fontWeight={"semibold"}
                    color={"gray.600"}
                  >
                    Result (CGPA/Percentage)
                  </FormLabel>
                  <Input
                    type="text"
                    name="result"
                    value={item.result}
                    onChange={(e)=>{onChangeList(e,index)}}
                  />
                </FormControl>
                <GridItem colSpan={{ base: 1, md: 2 }}>
                  <HStack>
                    <Spacer />
                    <Button
                      //   width={"200px"}
                      bg={"purple.600"}
                      mt={4}
                      onClick={() => {
                        setList(list.filter((_, i) => i !== index));
                      }}
                      colorScheme="purple"
                    >
                     delete
                    </Button>
                    <Button
                      //   width={"200px"}
                      bg={"purple.600"}
                      mt={4}
                      onClick={() => {
                        console.log(list);
                      }}
                      colorScheme="purple"
                    >
                     Save
                    </Button>
                    
                  </HStack>
                </GridItem>
              </Grid>
            </div>
          );
        })}
      {/* </Grid> */}
      <Button
                      //   width={"200px"}
                      bg={"purple.600"}
                      mt={4}
                      onClick={() => {
                        checkEmpty();
                        setList(oldList=>[...oldList,{collage:"",passing:"",courseName:"",specialize:"",result:""}])
                      }}
                      colorScheme="purple"
                    >
                      Add new 
                    </Button>
    </VStack>
  );
}

export default EducationDetails;
