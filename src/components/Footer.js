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
} from "@chakra-ui/react";
import { LogoFooter } from "../Icons/Icons";
import {
  Instagram,
  Facebook,
  Twitter,
  LinkedIn,
  Global,
} from "../Icons/SocialIcons";
const Footer = () => {
  return (
    <Box pt="100px" pb="60px" bg="white">
      <Grid
        templateColumns={["1fr", "1fr", "repeat(4, 1fr)"]}
        gap="10px"
        width="95%"
        mx="auto"
      >
        <GridItem
          justifySelf="center"
          bgImg="images/footerDecor.png"
          bgRepeat="no-repeat"
          bgPosition="left -30px bottom -100px"
        >
          <HStack spacing="10px">
            <Icon as={LogoFooter} />
            <Text
              color="#212121"
              fontSize="22px"
              lineHeight="22px"
              textAlign="left"
              fontWeight="bold"
            >
              Storage Connect
            </Text>
          </HStack>
          <Text
            fontSize="16px"
            color="#4A4A4A"
            textAlign="left"
            lineHeight="24px"
            mt="18px"
            mb="32px"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            cupiditate accusamus. Molestias!
          </Text>
          <Text
            fontSize="16px"
            color="#4A4A4A"
            textAlign="left"
            lineHeight="24px"
            mb="32px"
          >
            @ StorageConnect 2022, All rights reserved
          </Text>
        </GridItem>

        <GridItem justifySelf={"center"}>
          <Stack spacing="24px" color="#4A4A4A" fontSize="16px">
            <Text
              fontSize="18px"
              color="#2F2F2F"
              textAlign="left"
              lineHeight="21px"
              fontWeight="bold"
            >
              QUICK LINKS
            </Text>
            <Text>Active Listings</Text>
            <Text>Sell your Self Storage</Text>
            <Text>Free Evaluation</Text>
            <Text>Learn</Text>
          </Stack>
        </GridItem>
        <GridItem justifySelf="center" color="#4A4A4A" fontSize="16px">
          <Box>
            <Text
              color="#212121"
              fontSize="22px"
              lineHeight="22px"
              textAlign="left"
              fontWeight="bold"
              mb="30px"
            >
              NEWSLETTER
            </Text>
            <Text mb="10px">Get latest updates right in your inbox </Text>
            <Input placeholder="Enter your email" w="250px" mb="15px" />
          </Box>
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
