import { Box, Flex, Heading, Text, Icon, Button } from "@chakra-ui/react";
import { SendIcon } from "../../Icons/Icons";

const WriteToUs = () => {
  return (
    <Flex
      w="100vw"
      h="600px"
      bgImg="images/queriesBgImg.png"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify="center"
      overflow="hidden"
    >
      <Flex
        w="80vw"
        h="295px"
        justifyContent="space-around"
        align="center"
        bgColor="rgba(255, 255, 255, 0.9);"
        borderRadius="10px"
        boxShadow="box-shadow: 0px 30px 40px rgba(24, 73, 198, 0.1);"
      >
        <Box maxW="600px">
          <Heading
            color="#021850"
            fontWeight="bold"
            textAlign="center"
            fontSize="35px"
            lineHeight="30px"
          >
            Any Queries? Reach Out To Us.
          </Heading>
          <Text
            color="#000103"
            fontSize="18px"
            textAlign="center"
            lineHeight="30px"
            mt="20px"
          >
            Feel free to write to us, We are happy to help you.
          </Text>
        </Box>
        <Box w="fit-content">
          <Button
            rightIcon={<Icon as={SendIcon} />}
            bg="#1849C6"
            color="white"
            fontSize="18px"
            fontWeight="medium"
            py="20px"
            px="30px"
            borderRadius="10px"
            w="195px"
            h="60px"
            _hover={{
              backgroundColor: "blue",
            }}
          >
            Write To Us
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default WriteToUs;
