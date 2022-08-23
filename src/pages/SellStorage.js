import React from "react";
import Navbar from "../components/Navbar";
import {
  Flex,
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import {
  userIcon,
  telIcon,
  msgIcon,
  SendIcon,
  InfoIcon,
  LocationGray,
  BuildingIconGray,
  OccupantIconGray,
  SizeIconGray,
} from "../Icons/Icons";
import InputComponent from "../components/Input";

const SellStorage = () => {
  return (
    <>
      <Navbar color="#1849C6" />
      <Flex
        w="100vw"
        h="184px"
        bgColor="#F6F8FD"
        align="center"
        justify="center"
      >
        <Box>
          <Heading
            color="#2F2F2F"
            fontWeight={["semibold", "semibold", "bold"]}
            textAlign="center"
            fontSize={["25px", "25px", "40px"]}
            lineHeight="30px"
          >
            Sell Your Self Storage With Ease
          </Heading>
          <Text
            color="#000103"
            fontSize={["16px", "16px", "20px"]}
            textAlign="center"
            lineHeight="30px"
            mt="15px"
            fontWeight={"400"}
          >
            Let's help you get the most out of your hard work.
          </Text>
        </Box>
      </Flex>
      <Box overflow="hidden" w={["80%", "80%", "60%"]} mx="auto" mt="75px">
        <Text as="p" textAlign={"center"} fontSize={["18px", "18px", "25px"]}>
          Using our platform is the go to place for anything that has to do with
          self storage, kindly share some information about you and your Self
          Storage with us and a dedicated account manager will get in touch.
        </Text>
      </Box>
      <Box w="100vw" overflow={"hidden"}>
        <Box
          w="80%"
          bgColor="rgba(255, 255, 255, 0.9)"
          mx="auto"
          mt="50px"
          h={["auto", "auto", "662px"]}
          border={"1px solid #CDD4E7"}
          borderRadius="30px"
        >
          <Grid
            justify="center"
            align="center"
            templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
            gap={["40px", "40px", "100px"]}
            mt="60px"
            overflow="hidden"
          >
            <GridItem justifySelf={"center"}>
              <Text
                color="#2F2F2F"
                fontWeight={["semibold", "semibold", "bold"]}
                textAlign="left"
                fontSize={["20px", "20px", "25px"]}
                lineHeight="30px"
              >
                Your Contact Details
              </Text>
              <VStack mt={"50px"} spacing="20px" w="100%">
                <InputComponent
                  icon={userIcon}
                  placeColor={"#A1A6B1"}
                  placeholder={"John..."}
                  bgcolor={"#F6F8FD"}
                  widths={["100%", "100%", "416px"]}
                />
                <InputComponent
                  icon={telIcon}
                  placeColor={"#A1A6B1"}
                  placeholder={"Number"}
                  bgcolor={"#F6F8FD"}
                  widths={["100%", "100%", "416px"]}
                />
                <InputComponent
                  icon={msgIcon}
                  placeColor={"#A1A6B1"}
                  placeholder={"Email address"}
                  bgcolor={"#F6F8FD"}
                  widths={["100%", "100%", "416px"]}
                />
                <InputComponent
                  icon={LocationGray}
                  placeColor={"#A1A6B1"}
                  placeholder={"Full address"}
                  bgcolor={"#F6F8FD"}
                  widths={["100%", "100%", "416px"]}
                />
                <HStack alignSelf={"flex-start"}>
                  <Icon as={InfoIcon} />
                  <Text>Your information will not be public</Text>
                </HStack>
              </VStack>
            </GridItem>
            <GridItem justifySelf={"center"}>
              <Text
                color="#2F2F2F"
                fontWeight={["semibold", "semibold", "bold"]}
                textAlign="left"
                fontSize={["20px", "20px", "25px"]}
                lineHeight="30px"
              >
                Self Storage Details
              </Text>
              <VStack mt={"50px"} spacing="20px" w="100%">
                <InputComponent
                  icon={BuildingIconGray}
                  placeColor={"#A1A6B1"}
                  placeholder={"Total Units"}
                  bgcolor={"#F6F8FD"}
                  widths={["100%", "100%", "416px"]}
                />
                <InputComponent
                  icon={OccupantIconGray}
                  placeColor={"#A1A6B1"}
                  placeholder={"Occupancy"}
                  bgcolor={"#F6F8FD"}
                  widths={["100%", "100%", "416px"]}
                />
                <InputComponent
                  icon={SizeIconGray}
                  placeColor={"#A1A6B1"}
                  placeholder={"Storage square feet"}
                  bgcolor={"#F6F8FD"}
                  widths={["100%", "100%", "416px"]}
                />
                <InputComponent
                  icon={LocationGray}
                  placeColor={"#A1A6B1"}
                  placeholder={"Storage location"}
                  bgcolor={"#F6F8FD"}
                  widths={["100%", "100%", "416px"]}
                />
              </VStack>
            </GridItem>
          </Grid>
          <Box w="fit-content" mx="auto" my="60px">
            <Button
              rightIcon={<Icon as={SendIcon} />}
              bg="#1849C6"
              color="white"
              fontSize="18px"
              fontWeight="medium"
              py="20px"
              px="30px"
              borderRadius="10px"
              w={["80%", "80%", "418px"]}
              h="60px"
              _hover={{
                backgroundColor: "blue",
              }}
            >
              Send Inquiry
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default SellStorage;
