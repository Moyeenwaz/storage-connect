import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box>
      <Flex
        w="100vw"
        direction={["column", "column", "row"]}
        justifyContent="space-around"
        alignItems={"center"}
        overflow="hidden"
        mt="50px"
      >
        <Image src="images/freeEvaluationPageImg.png" />
        <Box
          color="#000103"
          w={["80%", "80%", "715px"]}
          mt={["30px", "30px", ""]}
        >
          <Heading
            fontWeight={"600"}
            fontSize={"30px"}
            mb="30px"
            textAlign={["center", "center", "left"]}
          >
            Have a Self Storage??
          </Heading>
          <Text
            fontSize={"20px"}
            lineHeight="30px"
            textAlign={["center", "center", "left"]}
          >
            Using our platform is the go to place on the internet for anything
            that has to do with self storage,
            <strong>
              we'll help you determine what your self storage is worth
            </strong>
            <br />
            <br />
            Kindly share some information about you and your Self Storage with
            us and a dedicated account manager will get in touch
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
