import React from "react";
import { Box, Flex, Text, HStack, Icon, VStack } from "@chakra-ui/react";
import { FadedBackwards, Forward } from "../../Icons/Icons";
import { homePageActiveListings } from "../../dummy";
import { ListCardContainer } from "../Card";

const ListView = () => {
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

      <Box
        w="80%"
        minH="1200px"
        mt="100px"
        mx="auto"
        border={"1px solid #D9D9D9"}
        borderRadius="20px"
        px="40px"
        py="40px"
      >
        <VStack spacing="25px">
          {homePageActiveListings.map((listing) => (
            <ListCardContainer
              key={listing.id}
              img={listing.img}
              totalUnits={listing.totalUnits}
              location={listing.location}
              occupancy={listing.occupancy}
              size={listing.size}
              heading={listing.heading}
            />
          ))}
        </VStack>
      </Box>

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

export default ListView;
