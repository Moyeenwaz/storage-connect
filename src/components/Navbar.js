import React, { useState } from "react";
import {
  Flex,
  Icon,
  Text,
  HStack,
  Button,
  Link,
  VStack,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { Logo } from "../Icons/Icons";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ color }) => {
  const [isActive, setIsActive] = useState(false);
  const icon = isActive ? FaTimes : FaBars;

  return (
    <Box as="nav" position="relative" w="100%">
      <Flex w="100%" h="92px" align="center" bg={color}>
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

          <IconButton
            as={icon}
            bg="transparent"
            color="white"
            cursor="pointer"
            onClick={() => setIsActive(!isActive)}
            _hover={{
              background: "none",
            }}
            _active={{
              background: "none",
            }}
            display={["block", "block", "none", "none"]}
            zIndex="999"
          />

          <HStack
            spacing="40px"
            fontSize="20px"
            color="white"
            display={["none", "none", "block", "block"]}
          >
            <Link
              to="#"
              _hover={{
                color: "#FFCE31",
              }}
            >
              Active Listings
            </Link>
            <Link
              to="#"
              _hover={{
                color: "#FFCE31",
              }}
            >
              Sell Your Self Storage
            </Link>
            <Link
              to="#"
              _hover={{
                color: "#FFCE31",
              }}
            >
              Free Evaluation
            </Link>
            <Link
              to="#"
              _hover={{
                color: "#FFCE31",
              }}
            >
              Learn
            </Link>
            <Button
              bg="#FFCE31"
              color="#021850"
              fontSize="18px"
              fontWeight="medium"
              py="8px"
              px="18px"
              borderRadius="10px"
              w="110px"
              h="36px"
            >
              Contact
            </Button>
          </HStack>
        </Flex>
      </Flex>
      <VStack
        spacing="40px"
        color="white"
        position="fixed"
        w="100%"
        h="100%"
        top="0"
        pt="100px"
        right="50%"
        transform="translateX(50%)"
        zIndex="99"
        background="rgba(0, 0, 0, 0.7)"
        display={`${isActive ? "flex" : "none"}`}
      >
        <Link
          to="#"
          _hover={{
            color: "#FFCE31",
          }}
        >
          Active Listings
        </Link>
        <Link
          to="#"
          _hover={{
            color: "#FFCE31",
          }}
        >
          Sell Your Self Storage
        </Link>
        <Link
          to="#"
          _hover={{
            color: "#FFCE31",
          }}
        >
          Free Evaluation
        </Link>
        <Link
          to="#"
          _hover={{
            color: "#FFCE31",
          }}
        >
          Learn
        </Link>
        <Button
          bg="#FFCE31"
          color="#021850"
          fontSize="18px"
          fontWeight="medium"
          py="8px"
          px="18px"
          borderRadius="10px"
          w="110px"
          h="36px"
        >
          Contact
        </Button>
      </VStack>
    </Box>
  );
};

export default Navbar;
