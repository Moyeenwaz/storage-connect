import React, { useState } from "react";
import {
  Flex,
  Icon,
  HStack,
  Button,
  Link,
  VStack,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { Logo } from "../Icons/Icons";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";

const Navbar = ({ color }) => {
  const [isActive, setIsActive] = useState(false);
  const icon = isActive ? FaTimes : FaBars;

  return (
    <Box as="nav" position="relative" w="100%">
      <Flex w="100%" h="92px" align="center" bg={color}>
        <Flex justify="space-between" align="center" w="90%" m="auto">
          <Flex justify="space-between" align="center">
            <Icon as={Logo} />
            <Link
              ml="7px"
              fontSize="20px"
              as={LinkR}
              to="/"
              color="white"
              fontWeight={"bold"}
              _hover={{
                textDecoration: "none",
              }}
            >
              Storage Connect
            </Link>
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
            display={["block", "block", "block", "none"]}
            zIndex="999"
          />

          <HStack
            spacing="40px"
            fontSize="20px"
            color="white"
            display={["none", "none", "none", "block"]}
          >
            <Link
              as={LinkR}
              to="/active-listings"
              _hover={{
                color: "#FFCE31",
              }}
            >
              Active Listings
            </Link>
            <Link
              as={LinkR}
              to="/sell-your-self-storage"
              _hover={{
                color: "#FFCE31",
              }}
            >
              Sell Your Self Storage
            </Link>
            <Link
              as={LinkR}
              to="/free-evaluation"
              _hover={{
                color: "#FFCE31",
              }}
            >
              Free Evaluation
            </Link>
            <Link
              as={LinkR}
              to="/learn"
              _hover={{
                color: "#FFCE31",
              }}
            >
              Learn
            </Link>
            <Button
              variant="link"
              as={LinkR}
              to="/contact"
              bg="#FFCE31"
              color="#021850"
              fontSize="18px"
              fontWeight="medium"
              py="8px"
              px="18px"
              borderRadius="10px"
              w="110px"
              h="36px"
              _hover={{
                textDecoration: "none",
                backgroundColor: "lightGray",
              }}
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
          as={LinkR}
          to="/active-listings"
          _hover={{
            color: "#FFCE31",
          }}
        >
          Active Listings
        </Link>
        <Link
          as={LinkR}
          to="/sell-your-self-storage"
          _hover={{
            color: "#FFCE31",
          }}
        >
          Sell Your Self Storage
        </Link>
        <Link
          as={LinkR}
          to="/free-evaluation"
          _hover={{
            color: "#FFCE31",
          }}
        >
          Free Evaluation
        </Link>
        <Link
          as={LinkR}
          to="/learn"
          _hover={{
            color: "#FFCE31",
          }}
        >
          Learn
        </Link>
        <Button
          variant="link"
          as={LinkR}
          to="/contact"
          bg="#FFCE31"
          color="#021850"
          fontSize="18px"
          fontWeight="medium"
          py="8px"
          px="18px"
          borderRadius="10px"
          w="110px"
          h="36px"
          _hover={{
            textDecoration: "none",
            backgroundColor: "lightGray",
          }}
        >
          Contact
        </Button>
      </VStack>
    </Box>
  );
};

export default Navbar;
