import React from "react";
import { Flex, Text, HStack, Icon, Grid, GridItem } from "@chakra-ui/react";
import { FadedBackwards, Forward } from "../../Icons/Icons";
import { homePageActiveListings } from "../../dummy";
import CardContainer from "../Card";

const GridView = () => {
  return (
    <>
      <Flex
        align={"center"}
        justify="space-between"
        w="85%"
        mx="auto"
        mt="35px"
        direction={["column", "column", "row"]}
      >
        <Text fontWeight={"500"} fontSize={"25px"} color="#000103">
          {homePageActiveListings.length} listings found
        </Text>
        <HStack spacing={"5"} fontSize="20px">
          <Icon as={FadedBackwards} />
          <Flex
            justify={"center"}
            align="center"
            w="40px"
            h="40px"
            borderRadius={"50%"}
            border="1px solid #1849C6"
            color={"#1849C6"}
          >
            1
          </Flex>
          <Flex
            justify={"center"}
            align="center"
            w="40px"
            h="40px"
            borderRadius={"50%"}
            border="1px solid #1849C6"
            color={"#1849C6"}
          >
            2
          </Flex>
          <Flex
            justify={"center"}
            align="center"
            w="40px"
            h="40px"
            borderRadius={"50%"}
            border="1px solid #1849C6"
            color={"#1849C6"}
          >
            3
          </Flex>
          <Flex
            justify={"center"}
            align="center"
            w="40px"
            h="40px"
            borderRadius={"50%"}
            border="1px solid #1849C6"
            color={"#1849C6"}
          >
            4
          </Flex>
          <Icon as={Forward} />
        </HStack>
      </Flex>
      <Grid
        mt="120px"
        w="80%"
        justifyContent="center"
        align="center"
        mx="auto"
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap="20px"
        minH="1200px"
      >
        {homePageActiveListings.map((listing) => (
          <GridItem justifySelf="center">
            <CardContainer
              key={listing.id}
              img={listing.img}
              totalUnits={listing.totalUnits}
              location={listing.location}
              occupancy={listing.occupancy}
              size={listing.size}
            />
          </GridItem>
        ))}
      </Grid>
      <Flex
        align={"center"}
        justify="space-between"
        w="85%"
        mx="auto"
        mt="35px"
        direction={["column", "column", "row"]}
      >
        <Text fontWeight={"500"} fontSize={"25px"} color="#000103">
          {homePageActiveListings.length} listings found
        </Text>
        <HStack spacing={"5"} fontSize="20px">
          <Icon as={FadedBackwards} />
          <Flex
            justify={"center"}
            align="center"
            w="40px"
            h="40px"
            borderRadius={"50%"}
            border="1px solid #1849C6"
            color={"#1849C6"}
          >
            1
          </Flex>
          <Flex
            justify={"center"}
            align="center"
            w="40px"
            h="40px"
            borderRadius={"50%"}
            border="1px solid #1849C6"
            color={"#1849C6"}
          >
            2
          </Flex>
          <Flex
            justify={"center"}
            align="center"
            w="40px"
            h="40px"
            borderRadius={"50%"}
            border="1px solid #1849C6"
            color={"#1849C6"}
          >
            3
          </Flex>
          <Flex
            justify={"center"}
            align="center"
            w="40px"
            h="40px"
            borderRadius={"50%"}
            border="1px solid #1849C6"
            color={"#1849C6"}
          >
            4
          </Flex>
          <Icon as={Forward} />
        </HStack>
      </Flex>
    </>
  );
};

export default GridView;
