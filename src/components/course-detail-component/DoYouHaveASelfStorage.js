import React from "react";
import { Box, Button, Text, Heading } from "@chakra-ui/react";

const DoYouHaveASelfStorage = () => {
  return (
    <Box
      w="100vw"
      minH="400px"
      bgImage="url('images/doYouHaveBgImg.png')"
      bgSize="cover"
      bgRepeat="no-repeat"
      overflow={"hidden"}
    >
      <Box
        w={["90%", "90%", "90%", "823px"]}
        mx="auto"
        color={"#f9f9f9"}
        mt="95px"
        textAlign={"center"}
      >
        <Heading fontSize={"35px"} fontWeight="bold">
          Do You Have A Self Storage For Sale?
        </Heading>
        <Text mt="20px" fontSize={"18px"} lineHeight="30px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          porro voluptatem eligendi facere magni animi velit modi assumenda
          itaque dolorum!
        </Text>

        <Box mt="50px" w="fit-content" mx="auto" mb="95px">
          <Button
            bg="#FFCE31"
            color="#021850"
            fontSize={["14px", "14px", "20px"]}
            fontWeight="medium"
            py="20px"
            px={"30px"}
            borderRadius="10px"
            w={["200px", "200px", "250px", "250px"]}
            h="60px"
          >
            Sell Your Self Storage
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DoYouHaveASelfStorage;
