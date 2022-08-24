import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Carousel from "../Carousel";
const Featured = () => {
  return (
    <Box
      as="section"
      overflow={"hidden"}
      bgImage="images/ellipse.png"
      bgRepeat="no-repeat"
      bgPosition={"top -180px left"}
    >
      <Box maxW="70vw" m="auto" mt="100px" mb="60px">
        <Heading
          color="#021850"
          fontWeight="600"
          textAlign="center"
          fontSize="35px"
          lineHeight="30px"
        >
          Featured Self Storages
        </Heading>
        <Text
          color="#000103"
          fontSize="18px"
          textAlign="center"
          lineHeight="30px"
          mt="20px"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          quidem quo nobis amet Lorem ipsum dolor sit amet consectetur.
        </Text>
      </Box>

      <Box w="95%" mx="auto" mb="50px">
        <Carousel />
      </Box>
    </Box>
  );
};

export default Featured;
