import { Box, Flex, Button, Heading, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";

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
      <Box maxW="676px" m="auto" mt="100px">
        <Heading
          color="white"
          fontWeight="extrabold"
          textAlign="center"
          fontSize="60px"
          lineHeight="75px"
        >
          Self Storage Business <br />
          Buy.Sell.Learn
        </Heading>
        <Text
          color="white"
          fontSize="20px"
          textAlign="center"
          lineHeight="33px"
          mt="10px"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          quidem quo nobis amet atque nisi temporibus.
        </Text>
        <Flex w="522px" justify="space-between" m="auto" mt="52px">
          <Button
            bg="#FFCE31"
            color="#021850"
            fontSize="18px"
            fontWeight="medium"
            pt="20px"
            pb="20px"
            pl="30px"
            pr="30px"
            borderRadius="10px"
            w="250px"
            h="60px"
          >
            Sell Your Self Storage
          </Button>
          <Button
            bg="white"
            color="#000103"
            fontSize="18px"
            fontWeight="medium"
            pt="20px"
            pb="20px"
            pl="30px"
            pr="30px"
            borderRadius="10px"
            w="250px"
            h="60px"
          >
            Sell Your Self Storage
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
