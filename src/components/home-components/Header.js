import React from "react";
import { Box, Flex, Button, Heading, Text } from "@chakra-ui/react";
import Navbar from "./../Navbar";

const Header = () => {
  return (
    <Box
      h="600px"
      w="100vw"
      bg="url(images/headerbgImg.png)"
      bgSize="cover"
      bgRepeat="no-repeat"
      as="header"
    >
      <Navbar color="transparent" />
      <Box
        w={["500px", "500px", "676px", "676px"]}
        my="0"
        mx="auto"
        pt="100px"
        pb="60px"
      >
        <Heading
          color="white"
          fontWeight={["bold", "bold", "extrabold"]}
          textAlign="center"
          fontSize={["45px", "45px", "60px"]}
          lineHeight={["50px", "50px", "75px"]}
        >
          Self Storage Business <br />
          Buy.Sell.Learn
        </Heading>
        <Text
          color="white"
          fontSize={["18px", "18px", "20px"]}
          textAlign="center"
          lineHeight={["25px", "25px", "33px"]}
          mt="10px"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          quidem quo nobis amet atque nisi temporibus.
        </Text>
        <Flex
          w="522px"
          justify="space-between"
          mx="auto"
          mt="52px"
          align="center"
          direction={["column", "column", "row", "row"]}
        >
          <Button
            bg="#FFCE31"
            color="#021850"
            fontSize={["16px", "16px", "20px"]}
            fontWeight="medium"
            py="20px"
            px="30px"
            borderRadius="10px"
            w={["200px", "200px", "200px", "250px"]}
            h="60px"
          >
            Sell Your Self Storage
          </Button>
          <Button
            bg="white"
            color="#000103"
            fontSize={["16px", "16px", "20px"]}
            fontWeight="medium"
            py="20px"
            px="30px"
            borderRadius="10px"
            w={["200px", "200px", "200px", "250px"]}
            h="60px"
            mt={["30px", "30px", "0", "0"]}
          >
            Sell Your Self Storage
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
