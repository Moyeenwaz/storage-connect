import { Box, Text, HStack, Heading, Button, Image } from "@chakra-ui/react";

const BuyASelfStorage = () => {
  return (
    <Box w="100vw" overflow={"hidden"}>
      <HStack mt="200px">
        <Box>
          <Image src="images/buySelfStorage.png" />
        </Box>
        <Box maxW="640px" marginRight="40px">
          <Heading
            color="#021850"
            fontWeight="semibold"
            textAlign="left"
            fontSize="35px"
            lineHeight="30px"
          >
            Do you want to buy a self storage?
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
              Buy A Self Storage
            </Button>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default BuyASelfStorage;
