import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import {
  HStack,
  Stack,
  Image,
  Grid,
  GridItem,
  Icon,
  Text,
  Button,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import {
  Location,
  BuildingIcon,
  SizeIcon,
  OccupantIcon,
  TimeIcon,
  TagIcon,
} from "../Icons/Icons";

const Card = styled.div`
  background: #f6f8fd;
  border: 1px solid #f9f9f9;
  border-radius: 10px;
  width: 400px;
  height: 580px;
  .img-container {
    width: 90%;
    margin: 20px auto;
  }

  .img {
    width: 100%;
  }
  @media (max-width: 820px) {
    width: 90%;
  }
`;

const CardContainer = ({ img, location, totalUnits, occupancy, size }) => {
  return (
    <Card>
      <div className="img-container">
        <img src={img} alt="" className="img" />
      </div>
      <Stack ml="24px" spacing="16px" as="ul">
        <HStack spacing="10px" as="li">
          <Icon as={Location} />
          <Text
            fontWeight="semibold"
            fontSize="25px"
            color="rgba(0, 1, 3, 0.7);"
          >
            {location}
          </Text>
        </HStack>
        <HStack spacing="10px" as="li">
          <Icon as={BuildingIcon} />
          <Text fontWeight="medium" fontSize="18px" color="rgba(0, 1, 3, 0.7);">
            Total units: {totalUnits}
          </Text>
        </HStack>
        <HStack spacing="10px" as="li">
          <Icon as={OccupantIcon} />
          <Text fontWeight="medium" fontSize="18px" color="rgba(0, 1, 3, 0.7);">
            Occupancy: {occupancy}
          </Text>
        </HStack>
        <HStack spacing="10px" as="li">
          <Icon as={SizeIcon} />
          <Text fontWeight="medium" fontSize="18px" color="rgba(0, 1, 3, 0.7);">
            Size: {size} sq ft
          </Text>
        </HStack>
      </Stack>
      <Box w="fit-content" mx="auto">
        <Button
          bg="#1849C6"
          color="white"
          fontSize="18px"
          fontWeight="medium"
          py="15px"
          px="20px"
          borderRadius="10px"
          w={["205px", "205px", "205px", "277px"]}
          h="50px"
          mt="30px"
          _hover={{
            backgroundColor: "blue",
          }}
        >
          View More Details
        </Button>
      </Box>
    </Card>
  );
};

export default CardContainer;

const CourseCard = styled.div`
  background: #ffffff;
  border: 3px solid #ffffff;
  border-radius: 10px;
  box-shadow: 0px 10px 40px rgba(1, 31, 109, 0.4);
  width: 287px;
  height: 433px;
  .img-container {
    width: 98%;
    margin: 2px auto;
  }

  .img {
    width: 100%;
  }
`;

export const CourseCardContainer = ({
  img,
  courseTitle,
  timePassed,
  action,
  tutor,
  tutorImg,
}) => {
  return (
    <CourseCard>
      <div className="img-container">
        <img src={img} alt="" className="img" />
      </div>
      <Box w="90%" mx="auto" mt="20px">
        <Text
          fontWeight="semibold"
          fontSize="20px"
          align="left"
          lineHeight="30px"
        >
          {courseTitle}
        </Text>
      </Box>
      <Flex
        justify="space-between"
        align="center"
        w="90%"
        margin="auto"
        mt="20px"
      >
        <HStack spacing="4px" fontWeight="normal" fontSize="14px">
          <Icon as={TimeIcon} />
          <Text>{timePassed}</Text>
        </HStack>
        <HStack spacing="4px">
          <Icon as={TagIcon} />
          <Text>{action}</Text>
        </HStack>
        <HStack spacing="4px">
          <Image src={tutorImg} />
          <Text>{tutor}</Text>
        </HStack>
      </Flex>
      <Box w="fit-content" mx="auto" my="20px">
        <Button
          bg="#1849C6"
          color="white"
          fontSize="18px"
          fontWeight="medium"
          as={LinkR}
          to="/course-detail"
          py="10px"
          px="20px"
          borderRadius="10px"
          w="205px"
          h="40px"
          _hover={{
            backgroundColor: "blue",
            textDecor: "none",
          }}
        >
          Read more
        </Button>
      </Box>
    </CourseCard>
  );
};
const CourseCardTwo = styled.div`
  background: #ffffff;
  border: 1px solid #afafaf;
  border-radius: 10px;
  width: 287px;
  height: 433px;
  .img-container {
    width: 98%;
    margin: 2px auto;
  }

  .img {
    width: 100%;
  }
`;

export const CourseCardContainerTwo = ({
  img,
  courseTitle,
  timePassed,
  action,
  tutor,
  tutorImg,
}) => {
  return (
    <CourseCardTwo>
      <div className="img-container">
        <img src={img} alt="" className="img" />
      </div>
      <Box w="90%" mx="auto" mt="20px">
        <Text
          fontWeight="semibold"
          fontSize="20px"
          align="left"
          lineHeight="30px"
        >
          {courseTitle}
        </Text>
      </Box>
      <Flex
        justify="space-between"
        align="center"
        w="90%"
        margin="auto"
        mt="20px"
      >
        <HStack spacing="4px" fontWeight="normal" fontSize="14px">
          <Icon as={TimeIcon} />
          <Text>{timePassed}</Text>
        </HStack>
        <HStack spacing="4px">
          <Icon as={TagIcon} />
          <Text>{action}</Text>
        </HStack>
        <HStack spacing="4px">
          <Image src={tutorImg} />
          <Text>{tutor}</Text>
        </HStack>
      </Flex>
      <Box w="fit-content" mx="auto" my="20px">
        <Button
          bg="#1849C6"
          color="white"
          fontSize="18px"
          fontWeight="medium"
          as={LinkR}
          to="/course-detail"
          py="10px"
          px="20px"
          borderRadius="10px"
          w="205px"
          h="40px"
          _hover={{
            backgroundColor: "blue",
            textDecor: "none",
          }}
        >
          Read more
        </Button>
      </Box>
    </CourseCardTwo>
  );
};

// const ListCard = styled.div`
//   background: #f6f8fd;
//   border: 1px solid #f9f9f9;
//   border-radius: 10px;
//   width: 80%;
//   min-height: 416px;
//   display: flex;
//   align-items: center;
//   .img-container {
//     width: 90%;
//     margin: 20px auto;
//   }

//   .img {
//     width: 100%;
//   }
//   @media (max-width: 820px) {
//     width: 90%;
//   }
// `;

export const ListCardContainer = ({
  img,
  location,
  totalUnits,
  occupancy,
  size,
  heading,
}) => {
  return (
    <Flex
      w="100%"
      overflow={"hidden"}
      borderRadius={"10px"}
      minH={"350px"}
      px="40px"
      justify={"space-between"}
      align="center"
      direction={["column", "column", "row"]}
      backgroundColor={" #f6f8fd"}
    >
      <Image src={img} />
      <Box w="55%">
        <Flex w="100%" justify={"flex-end"}>
          <HStack spacing="10px" as="li">
            <Icon as={Location} />
            <Text
              fontWeight="semibold"
              fontSize="20px"
              color="rgba(0, 1, 3, 0.7);"
            >
              {location}
            </Text>
          </HStack>
        </Flex>
        <Heading
          fontWeight="semibold"
          fontSize="30px"
          mt="40px"
          color="#2f2f2f;"
        >
          {heading}
        </Heading>
        <Grid
          mt="20px"
          w="100%"
          templateColumns={"repeat(3, 1fr)"}
          gap={"40px"}
        >
          <GridItem>
            <Stack spacing="15px">
              <HStack>
                <Icon as={BuildingIcon} />
                <Text
                  fontWeight="medium"
                  fontSize="18px"
                  color="rgba(0, 1, 3, 0.7)"
                >
                  Total units:
                </Text>
              </HStack>
              <Text
                fontWeight="medium"
                fontSize="18px"
                color="rgba(0, 1, 3, 0.5)"
              >
                {totalUnits} units
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack spacing="15px">
              <HStack>
                <Icon as={SizeIcon} />
                <Text
                  fontWeight="medium"
                  fontSize="18px"
                  color="rgba(0, 1, 3, 0.7)"
                >
                  Size:
                </Text>
              </HStack>
              <Text
                fontWeight="medium"
                fontSize="18px"
                color="rgba(0, 1, 3, 0.5)"
              >
                {size} sq ft
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack spacing="15px">
              <HStack>
                <Icon as={OccupantIcon} />
                <Text
                  fontWeight="medium"
                  fontSize="18px"
                  color="rgba(0, 1, 3, 0.7)"
                >
                  Occupancy:
                </Text>
              </HStack>

              <Text
                fontWeight="medium"
                fontSize="18px"
                color="rgba(0, 1, 3, 0.5);"
              >
                {occupancy}
              </Text>
            </Stack>
          </GridItem>
        </Grid>
        <Flex w="100%" justify={"flex-end"}>
          <Box w="fit-content">
            <Button
              bg="#1849C6"
              color="white"
              fontSize="18px"
              fontWeight="medium"
              py="15px"
              px="20px"
              borderRadius="10px"
              w={["205px", "205px", "205px", "277px"]}
              h="50px"
              mt="30px"
              _hover={{
                backgroundColor: "blue",
              }}
            >
              View More Details
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
