import React from "react";
import { Box, Text, HStack, Heading, Button, Image } from "@chakra-ui/react";

const SellYourSelfStorage = () => {
  return (
    <Box
      w="100vw"
      h="800px"
      bgImage="images/selfStoragebgImg.png"
      bgRepeat={"no-repeat"}
      bgSize="cover"
      overflow={"hidden"}
      bgPosition={"center"}
      position="relative"
    >
      <HStack mt="200px">
        <Box maxW="640px" mt="100px" ml="100px" mb="60px">
          <Heading
            color="#021850"
            fontWeight="semibold"
            textAlign="left"
            fontSize="35px"
            lineHeight="30px"
          >
            Do you have a self storage for sale?
          </Heading>
          <Text
            color="#000103"
            fontSize="18px"
            textAlign="left"
            lineHeight="30px"
            mt="20px"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quidem quo nobis amet Lorem ipsum dolor sit amet consectetur. Lorem
            ipsum dolor sit amet consectetur.
          </Text>
          <Box w="fit-content" mt="40px">
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
        <Box position="absolute" bottom="0" right="0" boxSize={"680px"}>
          <Image src="images/selfStorageImg.png" />
        </Box>
      </HStack>
    </Box>
  );
};

export default SellYourSelfStorage;
