import React from "react";
import {
  Box,
  Select,
  Icon,
  Flex,
  Grid,
  GridItem,
  Text,
  HStack,
} from "@chakra-ui/react";
import { FadedBackwards, Forward, Sort } from "../../Icons/Icons";
import { courseDetails } from "../../dummy";
import { CourseCardContainerTwo } from "../Card";

const AllCategories = () => {
  return (
    <Box w="100%">
      <Flex w="100%" justify={"flex-end"} align="center">
        <HStack mr="10px">
          <Icon as={Sort} />
          <Text>Sort by:</Text>
        </HStack>
        <Select w="200px">
          <option>Newest</option>
        </Select>
      </Flex>
      <Grid
        w="90%"
        mx="auto"
        mt="50px"
        justifyContent="center"
        align="center"
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap="30px"
      >
        {courseDetails.map((course) => (
          <GridItem justifySelf="center">
            <CourseCardContainerTwo
              key={course.id}
              action={course.action}
              courseTitle={course.title}
              timePassed={course.time}
              tutor={course.name}
              tutorImg={course.tutorImg}
              img={course.img}
            />
          </GridItem>
        ))}
      </Grid>
      <Flex w="100%" justify={"flex-end"} mt="50px" align="center">
        <HStack spacing={"5"} fontSize="20px">
          <Icon as={FadedBackwards} />
          <Flex
            justify={"center"}
            align="center"
            w="40px"
            h="40px"
            borderRadius={"50%"}
            border="1px solid #1849C6"
            color={"#1849C6"}
          >
            1
          </Flex>
          <Flex
            justify={"center"}
            align="center"
            w="40px"
            h="40px"
            borderRadius={"50%"}
            border="1px solid #1849C6"
            color={"#1849C6"}
          >
            2
          </Flex>
          <Flex
            justify={"center"}
            align="center"
            w="40px"
            h="40px"
            borderRadius={"50%"}
            border="1px solid #1849C6"
            color={"#1849C6"}
          >
            3
          </Flex>
          <Flex
            justify={"center"}
            align="center"
            w="40px"
            h="40px"
            borderRadius={"50%"}
            border="1px solid #1849C6"
            color={"#1849C6"}
          >
            4
          </Flex>
          <Icon as={Forward} />
        </HStack>
      </Flex>
    </Box>
  );
};

export default AllCategories;
