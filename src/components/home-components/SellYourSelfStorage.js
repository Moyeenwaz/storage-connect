import React from "react";
import { Box, Text, Flex, Heading, Button, Image } from "@chakra-ui/react";

const SellYourSelfStorage = () => {
  return (
    <Box
      w="100vw"
      bgImage="images/selfStoragebgImg.png"
      bgRepeat={"no-repeat"}
      bgSize="cover"
      overflow={"hidden"}
      bgPosition={"center"}
      position="relative"
    >
      <Flex
        mt="200px"
        justify="space-between"
        align="center"
        flexDirection={["column", "column", "column", "row"]}
      >
        <Box
          maxW={["70vw", "70vw", "640px"]}
          mt="100px"
          ml={["0", "0", "0", "100px"]}
          mb="60px"
          order={["2", "2", "2", "1"]}
        >
          <Heading
            color="#021850"
            fontWeight="semibold"
            textAlign={["center", "center", "center", "left"]}
            fontSize="35px"
            lineHeight="30px"
          >
            Do you have a self storage for sale?
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
              Sell Your Self Storage
            </Button>
          </Box>
        </Box>
        <Box
          boxSize={["70vw", "70vw", "70vw", "680px"]}
          order={["1", "1", "1", "2"]}
        >
          <Image src="images/selfStorageImg.png" />
        </Box>
      </Flex>
    </Box>
  );
};

export default SellYourSelfStorage;
