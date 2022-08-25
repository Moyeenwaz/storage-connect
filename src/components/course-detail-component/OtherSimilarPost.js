import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  IconButton,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { right } from "../../Icons/Icons";
import { CourseCardContainer } from "../Card";
import { courseDetails } from "../../dummy";

const OtherSimilarPost = () => {
  return (
    <Box
      w="100vw"
      overflow={"hidden"}
      minH="828px"
      bgColor="#f6f8fd"
      py="120px"
      px="141px"
    >
      <Flex
        w="100%"
        justify={"space-between"}
        align="center"
        direction={["column", "column", "row"]}
      >
        <Box
          w={["100%", "100%", "654px"]}
          textAlign={["center", "center", "left"]}
        >
          <Heading
            fontWeight={["semibold", "semibold", "bold"]}
            fontSize={"26px"}
          >
            Other Similar Posts
          </Heading>
          <Text
            mt="20px"
            fontSize={"18px"}
            color="#000103"
            lineHeight={-"30px"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sunt
            dolorum aliquam quam eligendi explicabo consectetur molestiae et
            impedit rem.
          </Text>
        </Box>
        <HStack spacing="10px">
          <Text>View More</Text>
          <IconButton
            bg={"transparent"}
            _hover={{ backgroundColor: "transparent" }}
            _focus={{
              backgroundColor: "transparent",
            }}
            as={right}
          />
        </HStack>
      </Flex>
      <Grid
        w="80%"
        mx="auto"
        mt="60px"
        justifyContent="center"
        align="center"
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap="30px"
      >
        {courseDetails.map((course) => (
          <GridItem justifySelf="center">
            <CourseCardContainer
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
    </Box>
  );
};

export default OtherSimilarPost;
