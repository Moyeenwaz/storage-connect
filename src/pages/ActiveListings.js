import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ActiveListingSearch from "../components/home-components/ActiveListingSearch";

import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Icon,
  IconButton,
  HStack,
  Select,
} from "@chakra-ui/react";
import {
  List,
  GridIcon,
  YellowBell,
  Sort,
  ListActive,
  GridIconActive,
} from "../Icons/Icons";
import { ActiveListingsModal } from "../components/active-listings-components/ActiveListingsModal";
import GridView from "../components/active-listings-components/GridView";
import ListView from "../components/active-listings-components/ListView";

const ActiveListings = () => {
  const [modalIsShowing, setModalIsShowing] = useState(false);
  const [gridView, setGridView] = useState(true);

  return (
    <>
      {modalIsShowing && (
        <ActiveListingsModal setModalIsShowing={setModalIsShowing} />
      )}
      <Navbar color={"#1849C6"} />
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
            All Active Self Storage Listings
          </Heading>
        </Box>
      </Flex>
      <Box mt="-50px">
        <ActiveListingSearch />
      </Box>
      <Flex
        w="85%"
        mx="auto"
        mt="30px"
        px="21px"
        py="32px"
        bgColor="#f6f8fd"
        minH={["300px", "300px", "105px"]}
        borderRadius="10px"
        justify={"space-between"}
        align={"center"}
        direction={["column", "column", "row"]}
      >
        <HStack spacing="45px" fontSize={"20px"} color={"#000103"}>
          <HStack spacing={"10px"}>
            <IconButton
              cursor={"pointer"}
              bg="transparent"
              _focus={{ bg: "transparent" }}
              _hover={{ bg: "transparent" }}
              icon={!gridView ? <ListActive /> : <List />}
              onClick={() => setGridView(false)}
            />
            <Text color={!gridView ? "#1849C6" : "#000103"}>List View</Text>
          </HStack>
          <HStack>
            {" "}
            <IconButton
              cursor={"pointer"}
              bg="transparent"
              _focus={{ bg: "transparent" }}
              _hover={{ bg: "transparent" }}
              icon={gridView ? <GridIconActive /> : <GridIcon />}
              onClick={() => setGridView(true)}
            />
            <Text color={gridView ? "#1849C6" : "#000103"}>Grid View</Text>
          </HStack>
        </HStack>
        <Box w="fit-content">
          <Button
            leftIcon={<Icon as={YellowBell} />}
            color="white"
            backgroundColor={"#1849C6"}
            px="30px"
            py="30px"
            borderRadius={"10px"}
            _hover={{ bg: "blue" }}
            onClick={() => setModalIsShowing(true)}
          >
            Get notified of this search
          </Button>
        </Box>
        <HStack>
          <HStack mr="10px">
            <Icon as={Sort} />
            <Text>Sort by:</Text>
          </HStack>
          <Select w="200px">
            <option>Newest</option>
          </Select>
        </HStack>
      </Flex>
      {gridView ? <GridView /> : <ListView />}
      <Footer />
    </>
  );
};

export default ActiveListings;
