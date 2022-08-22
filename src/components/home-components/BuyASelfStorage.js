import React from "react";

import { Box, Text, Flex, Heading, Button, Image } from "@chakra-ui/react";

const BuyASelfStorage = () => {
  return (
    <Box w="100vw" overflow={"hidden"}>
      <Flex
        mt="200px"
        justify="space-between"
        align="center"
        flexDirection={["column", "column", "column", "row"]}
      >
        <Box boxSize={["70vw", "70vw", "70vw", "680px"]}>
          <Image src="images/buySelfStorage.png" />
        </Box>
        <Box
          maxW={["70vw", "70vw", "640px"]}
          mr={["0", "0", "0", "40px"]}
          mt="100px"
        >
          <Heading
            color="#021850"
            fontWeight="semibold"
            textAlign={["center", "center", "center", "left"]}
            fontSize="35px"
            lineHeight="30px"
          >
            Do you want to buy a self storage?
          </Heading>
          <Text
            color="#000103"
            fontSize="18px"
            textAlign={["center", "center", "center", "left"]}
            lineHeight="30px"
            mt="20px"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quidem quo nobis amet Lorem ipsum dolor sit amet consectetur. Lorem
            ipsum dolor sit amet consectetur.
          </Text>
          <Box w="fit-content" mt="40px" mx={["auto", "auto", "auto", "0"]}>
            <Button
              bg="#1849C6"
              color="white"
              fontSize="18px"
              fontWeight="medium"
              py="20px"
              px="30px"
              borderRadius="10px"
              w="253px"
              h="60px"
              _hover={{
                backgroundColor: "blue",
              }}
            >
              Buy A Self Storage
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default BuyASelfStorage;
