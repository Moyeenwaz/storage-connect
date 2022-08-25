import React from "react";
import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";

const MoreInformation = () => {
  return (
    <Box backgroundColor={"#f6f8fd"} w="100vw">
      <Box
        w={["80%", "80%", "80%", "1024px"]}
        mt="100px"
        mx="auto"
        overflow={"hidden"}
      >
        <Flex
          mt="85px"
          align={"center"}
          justify={"space-between"}
          direction={["column", "column", "row"]}
        >
          <Box
            w={["80%", "80%", "453px"]}
            order={["2", "2", "1"]}
            mt={["30px", "30px", ""]}
          >
            <Heading
              fontWeight={["semibold", "semibold", "bold"]}
              textAlign="left"
              fontSize={"26px"}
            >
              More Information about how to get a self storage
            </Heading>
            <Text
              mt="20px"
              fontSize={"18px"}
              color="#000103"
              lineHeight={-"30px"}
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              recusandae labore maiores voluptates, veniam repellendus maxime
              rem! Ea minima sapiente numquam aperiam itaque mollitia
              repudiandae fugit nobis, modi tenetur deleniti cupiditate dicta
              recusandae dolorum magnam, in enim ratione eum illum possimus rem
              voluptates. Aliquam facere porro perspiciatis, asperiores id odit.{" "}
            </Text>
          </Box>
          <Image src="images/moreInfoImg1.png" order={["1", "1", "2"]} />
        </Flex>
        <Flex
          mt="104px"
          mb="100px"
          align={"center"}
          justify={"space-between"}
          direction={["column", "column", "row"]}
        >
          <Image src="images/moreInfoImg2.png" />
          <Box w={["80%", "80%", "453px"]} mt={["30px", "30px", ""]}>
            <Heading
              fontWeight={["semibold", "semibold", "bold"]}
              textAlign="left"
              fontSize={"26px"}
            >
              More Information about how to get a self storage
            </Heading>
            <Text
              mt="20px"
              fontSize={"18px"}
              color="#000103"
              lineHeight={-"30px"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              recusandae labore maiores voluptates, veniam repellendus maxime
              rem! Ea minima sapiente numquam aperiam itaque mollitia
              repudiandae fugit nobis, modi tenetur deleniti cupiditate dicta
              recusandae dolorum magnam, in enim ratione eum illum possimus rem
              voluptates. Aliquam facere porro perspiciatis, asperiores id odit.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default MoreInformation;
