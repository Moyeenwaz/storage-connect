import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Icon,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { userIcon, telIcon, msgIcon, SendIcon } from "../Icons/Icons";
import Navbar from "../components/Navbar";
import InputComponent from "../components/Input";
import Footer from "../components/Footer";
const Contact = () => {
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
            Contact Us
          </Heading>
          <Text
            color="#000103"
            fontSize={["16px", "16px", "20px"]}
            textAlign="center"
            lineHeight="30px"
            mt="15px"
            fontWeight={"400"}
          >
            Let us know what we can help you with.
          </Text>
        </Box>
      </Flex>
      <Box w="100vw" overflow={"hidden"}>
        <Box
          w={["80%", "80%", "702px"]}
          bgColor="rgba(255, 255, 255, 0.9)"
          mx="auto"
          mt="50px"
          h="609px"
          border={"1px solid #CDD4E7"}
          borderRadius="30px"
        >
          <VStack mt="50px" spacing="20px" w="100%" mx="auto">
            <InputComponent
              icon={userIcon}
              placeColor={"#A1A6B1"}
              placeholder={"John..."}
              bgcolor={"#F6F8FD"}
              widths={["80%", "80%", "563px"]}
            />
            <InputComponent
              icon={telIcon}
              placeColor={"#A1A6B1"}
              placeholder={"Number"}
              bgcolor={"#F6F8FD"}
              widths={["80%", "80%", "563px"]}
            />
            <InputComponent
              icon={msgIcon}
              placeColor={"#A1A6B1"}
              placeholder={"Email address"}
              bgcolor={"#F6F8FD"}
              widths={["80%", "80%", "563px"]}
            />
            <Textarea
              height={"150px"}
              placeholder="Your message..."
              w={["80%", "80%", "563px"]}
              resize="vertical"
              backgroundColor={"#F6F8FD"}
            />

            <Button
              rightIcon={<Icon as={SendIcon} />}
              bg="#1849C6"
              color="white"
              fontSize="18px"
              fontWeight="medium"
              py="20px"
              px="30px"
              borderRadius="10px"
              w={["80%", "80%", "563px"]}
              h="60px"
              _hover={{
                backgroundColor: "blue",
              }}
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
