import React from "react";
import styled from "styled-components";
import {
  HStack,
  Stack,
  Icon,
  Text,
  Button,
  Box,
  Flex,
  Image,
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
  @media (max-width: 768px) {
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
      <Box w="90%" margin="auto" mt="20px">
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
          py="10px"
          px="20px"
          borderRadius="10px"
          w="205px"
          h="40px"
          _hover={{
            backgroundColor: "blue",
          }}
        >
          Read more
        </Button>
      </Box>
    </CourseCard>
  );
};
