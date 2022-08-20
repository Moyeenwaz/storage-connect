import React from "react";
import { Box, Text, Heading, Grid, GridItem, Button } from "@chakra-ui/react";
import { CourseCardContainer } from "../Card";
import { courseDetails } from "../../dummy";

const LearnStorage = () => {
  return (
    <Box
      bgImg="images/learnBgImg.png"
      bgRepeat={"no-repeat"}
      bgSize="cover"
      overflow={"hidden"}
      bgPosition={"center"}
      w="100vw"
      position="relative"
      mt="-60px"
    >
      <Box w={["70vw", "70vw", "800px", "800px"]} m="auto" mt="100px" mb="60px">
        <Heading
          color="white"
          fontWeight="semibold"
          textAlign="center"
          fontSize="35px"
          lineHeight="50px"
        >
          Learn everything about buying, selling and operating a self storage
        </Heading>
        <Text
          color="white"
          fontSize="18px"
          textAlign="center"
          lineHeight="30px"
          mt="20px"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          quidem quo nobis amet Lorem ipsum dolor sit amet consectetur.
        </Text>
      </Box>
      <Grid
        mt="72px"
        w="90%"
        mx="auto"
        templateColumns={["1fr", "1fr", "1fr", "repeat(4, 1fr)"]}
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
      <Box w="fit-content" m="auto" mt="100px" mb="100px">
        <Button
          bg="#FFCE31"
          color="#021850"
          fontSize="18px"
          fontWeight="medium"
          py="30px"
          px="88px"
          borderRadius="10px"
          w="364px"
          h="80px"
        >
          View More Courses
        </Button>
      </Box>
    </Box>
  );
};

export default LearnStorage;
