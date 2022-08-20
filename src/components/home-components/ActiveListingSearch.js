import React from "react";
import {
  Flex,
  Button,
  HStack,
  Text,
  Input,
  Stack,
  Icon,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import {
  Location,
  OccupantIcon,
  BuildingIcon,
  SearchIcon,
} from "../../Icons/Icons";

const ActiveListingSearch = () => {
  return (
    <Flex
      justify="space-between"
      align={["", "", "", "center"]}
      w={["80%", "80%", "80%", "1200px"]}
      mx="auto"
      borderRadius="20px"
      boxShadow="0px 5px 50px rgba(1, 31, 109, 0.1)"
      h={["auto", "auto", "auto", "160px"]}
      px="34px"
      py="30px"
      bg="white"
      overflow={"hidden"}
      position="relative"
      direction={["column", "column", "column", "row"]}
    >
      <Stack
        color="color: rgba(0, 1, 3, 0.7);"
        fontWeight="normal"
        fontSize="20px"
        spacing="15px"
        align="left"
      >
        <Text as="label">Location</Text>
        <InputGroup h="60px" width={["80%", "80%", "80%", "400px"]}>
          <InputLeftElement>
            <Icon as={Location} />
          </InputLeftElement>
          <Input
            placeholder="Search Location"
            fontSize="16px"
            _placeholder={{
              color: "#979797",
            }}
          />
        </InputGroup>
      </Stack>
      <Stack
        color="color: rgba(0, 1, 3, 0.7);"
        fontWeight="normal"
        fontSize="20px"
        spacing="15px"
      >
        <Text as="label">Properties</Text>
        <HStack spacing="20px">
          <InputGroup h="60px" width={["80%", "80%", "80%", "200px"]}>
            <InputLeftElement>
              <Icon as={BuildingIcon} />
            </InputLeftElement>
            <Input
              placeholder="Unit Count"
              fontSize="16px"
              _placeholder={{
                color: "#979797",
              }}
            />
          </InputGroup>
          <InputGroup h="60px" width={["80%", "80%", "80%", "200px"]}>
            <InputLeftElement>
              <Icon as={OccupantIcon} />
            </InputLeftElement>
            <Input
              placeholder="Unit Count"
              fontSize="16px"
              _placeholder={{
                color: "#979797",
              }}
            />
            <InputRightElement color="#979797">%</InputRightElement>
          </InputGroup>
        </HStack>
      </Stack>
      <Button
        leftIcon={<Icon as={SearchIcon} />}
        bg="#FFCE31"
        color="#021850"
        fontSize="18px"
        fontWeight="medium"
        py="20px"
        px="24px"
        borderRadius="10px"
        w="148px"
        h="60px"
      >
        Search
      </Button>
    </Flex>
  );
};

export default ActiveListingSearch;
