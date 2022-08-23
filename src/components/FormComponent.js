import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";

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
import InputComponent from "./Input";

const FormComponent = () => {
  return (
    <>
      {" "}
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
    </>
  );
};

export default FormComponent;
