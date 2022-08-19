import styled from "styled-components";
import { HStack, Stack, Icon, Text, Button, Box } from "@chakra-ui/react";
import { Location, BuildingIcon, SizeIcon, OccupantIcon } from "../Icons/Icons";

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

  span {
    font-weight: 400;
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
      <Box w="fit-content" m="auto">
        <Button
          bg="#1849C6"
          color="white"
          fontSize="18px"
          fontWeight="medium"
          pt="15px"
          pb="15px"
          pl="20px"
          pr="20px"
          borderRadius="10px"
          w="277px"
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
