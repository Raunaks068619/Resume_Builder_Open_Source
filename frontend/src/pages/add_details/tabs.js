import { Flex, Stack, Button } from "@chakra-ui/react";


function Tabs({tabs, changeIndex}){
    return(
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
    );
}

export default Tabs;