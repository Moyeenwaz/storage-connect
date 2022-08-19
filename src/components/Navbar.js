import React from "react";
import { Flex, Icon, Text, HStack, Button } from "@chakra-ui/react";
import { Logo } from "../Icons/Icons";

const Navbar = ({ color }) => {
  return (
    <Flex as="nav" w="100%" h="92px" align="center" bg={color}>
      <Flex justify="space-between" align="center" w="90%" m="auto">
        <Flex justify="space-between" align="center">
          <Icon as={Logo} />
          <Text
            ml="7px"
            fontSize="20px"
            as="h1"
            color="white"
            fontWeight={"bold"}
          >
            Storage Connect
          </Text>
        </Flex>
        <HStack spacing="40px" fontSize="20px" color="white">
          <Text
            cursor="pointer"
            _hover={{
              color: "#FFCE31",
            }}
          >
            Active Listings
          </Text>
          <Text
            cursor="pointer"
            _hover={{
              color: "#FFCE31",
            }}
          >
            Sell Your Self Storage
          </Text>
          <Text
            cursor="pointer"
            _hover={{
              color: "#FFCE31",
            }}
          >
            Free Evaluation
          </Text>
          <Text
            cursor="pointer"
            _hover={{
              color: "#FFCE31",
            }}
          >
            Learn
          </Text>
          <Button
            bg="#FFCE31"
            color="#021850"
            fontSize="18px"
            fontWeight="medium"
            pt="8px"
            pb="8px"
            pl="18px"
            pr="18px"
            borderRadius="10px"
            w="110px"
            h="36px"
          >
            Contact
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
