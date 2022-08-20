import React from "react";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Stack,
  Button,
  Text,
  Input,
  Select,
  Icon,
  Link,
  Flex,
} from "@chakra-ui/react";
import { LogoFooter } from "../Icons/Icons";
import { Instagram, Facebook, Twitter, LinkedIn } from "../Icons/SocialIcons";
const Footer = () => {
  return (
    <Box pt="100px" pb="60px" bg="white">
      <Grid
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap="40px"
        width="95%"
        mx="auto"
      >
        <GridItem
          justifySelf="center"
          bgImg={["none", "none", "images/footerDecor.png"]}
          bgRepeat="no-repeat"
          bgPosition="left -30px bottom -100px"
          textAlign={["center", "center", "left", "left"]}
        >
          <HStack spacing="10px" w="fit-content" mx={["auto", "auto", "", ""]}>
            <Icon as={LogoFooter} />
            <Text
              color="#212121"
              fontSize="22px"
              lineHeight="22px"
              fontWeight="bold"
            >
              Storage Connect
            </Text>
          </HStack>
          <Text
            fontSize="16px"
            color="#4A4A4A"
            lineHeight="24px"
            mt="18px"
            mb="32px"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            cupiditate accusamus. Molestias!
          </Text>
          <Text fontSize="16px" color="#4A4A4A" lineHeight="24px" mb="32px">
            @ StorageConnect 2022, All rights reserved
          </Text>
        </GridItem>

        <GridItem justifySelf={"center"}>
          <Stack
            spacing="24px"
            color="#4A4A4A"
            fontSize="16px"
            align={["center", "center", "left", "left"]}
          >
            <Text
              fontSize="18px"
              color="#2F2F2F"
              textAlign="left"
              lineHeight="21px"
              fontWeight="bold"
            >
              QUICK LINKS
            </Text>
            <Link to="#">Active Listings</Link>
            <Link to="#">Sell your Self Storage</Link>
            <Link to="#">Free Evaluation</Link>
            <Link to="#">Learn</Link>
          </Stack>
        </GridItem>
        <GridItem justifySelf="center" color="#4A4A4A" fontSize="16px">
          <Flex
            direction="column"
            justify={["center", "center", "left", "left"]}
            textAlign={["center", "center", "left", "left"]}
          >
            <Text
              color="#212121"
              fontSize="22px"
              lineHeight="22px"
              fontWeight="bold"
              mb="30px"
            >
              NEWSLETTER
            </Text>
            <Text mb="10px">Get latest updates right in your inbox </Text>
            <Input placeholder="Enter your email" w="250px" mb="15px" />
          </Flex>
          <Box w="fit-content" mx={["auto", "auto", "0", "0"]}>
            <Button
              bg="#1849C6"
              color="white"
              fontSize="18px"
              fontWeight="medium"
              py="10px"
              px="20px"
              borderRadius="10px"
              w="161px"
              h="50px"
              _hover={{
                backgroundColor: "blue",
              }}
            >
              Subscribe Now
            </Button>
          </Box>
        </GridItem>
        <GridItem
          justifySelf="center"
          color="#4A4A4A"
          fontSize="16px"
          bgImg="images/footerDecor.png"
          bgRepeat="no-repeat"
          bgPosition="left 30px bottom 100px"
        >
          <Text
            color="#212121"
            fontSize="22px"
            lineHeight="22px"
            textAlign="left"
            fontWeight="bold"
            mb="30px"
          >
            LET'S GET SOCIAL
          </Text>
          <HStack spacing="18px" mb="38px">
            <Icon as={Facebook} />
            <Icon as={LinkedIn} />
            <Icon as={Twitter} />
            <Icon as={Instagram} />
          </HStack>

          <Select pl="10px">
            <option value="">English</option>
            <option value="">Other Countries</option>
          </Select>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
