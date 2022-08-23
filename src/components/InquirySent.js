import React from "react";
import { Box, Flex, Icon, Text, Heading, Button } from "@chakra-ui/react";
import { CheckMark } from "../Icons/Icons";
const InquirySent = () => {
  return (
    <Flex w="100vw" h="100vh" justify={"center"} align="center">
      <Flex
        w={["80%", "80%", "578px"]}
        align="center"
        justify="center"
        direction={"column"}
      >
        <Icon as={CheckMark} />
        <Box mt="50px" w="80%">
          <Heading
            color="#2f2f2f"
            fontWeight={["semibold", "semibold", "bold"]}
            textAlign="center"
            fontSize={["25px", "25px", "35px"]}
            lineHeight="30px"
          >
            Your Inquiry Has Been Sent
          </Heading>
          <Text
            color="#000103"
            fontSize={["16px", "16px", "18px"]}
            textAlign="center"
            lineHeight="30px"
            mt="20px"
          >
            We recieved your inquiry and we will get in touch as soon as
            possible
          </Text>
        </Box>
        <Flex
          w={["fit-content", "fit-content", "60%", "60%"]}
          justify="space-between"
          mx="auto"
          mt="52px"
          align="center"
          direction={["column", "column", "row", "row"]}
        >
          <Button
            bg="#1849C6"
            color="white"
            fontSize="20px"
            fontWeight="medium"
            py="10px"
            px={"30px"}
            borderRadius="10px"
            w="144px"
            h="50px"
            _hover={{
              backgroundColor: "blue",
            }}
          >
            Active Listings
          </Button>
          <Button
            bg="white"
            color="#000103"
            fontSize="20px"
            fontWeight="medium"
            py="10px"
            px="30px"
            border={"1px solid #2f2f2f"}
            borderRadius="10px"
            w="144px"
            h="50px"
            mt={["30px", "30px", "0", "0"]}
          >
            Go home
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InquirySent;
