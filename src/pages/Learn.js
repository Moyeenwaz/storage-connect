import React from "react";
import Navbar from "../components/Navbar";
import {
  Flex,
  Box,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";
import AllCategories from "../components/learn-components/AllCategories";
import Footer from "../components/Footer";

const Learn = () => {
  return (
    <>
      <Navbar color="#1849C6" />
      <Flex
        w="100vw"
        h="184px"
        bgColor="#F6F8FD"
        align="center"
        justify="center"
      >
        <Box>
          <Heading
            color="#2F2F2F"
            fontWeight={["semibold", "semibold", "bold"]}
            textAlign="center"
            fontSize={["25px", "25px", "40px"]}
            lineHeight="30px"
          >
            Learn About Self Storage
          </Heading>
          <Text
            color="#000103"
            fontSize={["16px", "16px", "20px"]}
            textAlign="center"
            lineHeight="30px"
            mt="15px"
            fontWeight={"400"}
          >
            Learn everything about a self storage
          </Text>
        </Box>
      </Flex>
      <Box w="90%" mx="auto" mt="100px" minH={"1120px"}>
        <Tabs align="center" size={["sm", "sm", "md", "lg"]} isFitted isLazy>
          <TabList fontWeight={"bold"}>
            <Tab fontWeight={"semibold"}>All Categories</Tab>
            <Tab fontWeight={"semibold"}>Buying a Self Storage</Tab>
            <Tab fontWeight={"semibold"}>Selling a Self Storage</Tab>
            <Tab fontWeight={"semibold"}>Operating a Self Storage</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <AllCategories />
            </TabPanel>
            <TabPanel>
              <p>Courses on Selling a self storage</p>
            </TabPanel>
            <TabPanel>
              <p>Courses on buying a self storage!</p>
            </TabPanel>
            <TabPanel>
              <p>Courses on operating a self storage</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Footer />
    </>
  );
};

export default Learn;
