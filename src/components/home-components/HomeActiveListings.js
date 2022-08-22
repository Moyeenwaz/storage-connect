import React from "react";
import { Box, Grid, GridItem, Heading, Text, Button } from "@chakra-ui/react";
import ActiveListingSearch from "./ActiveListingSearch";
import { homePageActiveListings } from "../../dummy";
import CardContainer from "../Card";
const HomeActiveListings = () => {
  return (
    <Box w="100vw" position={"relative"}>
      <Box w="70vw" m="auto" mt="100px" mb="60px">
        <Heading
          color="#2F2F2F"
          fontWeight="semibold"
          textAlign="center"
          fontSize="35px"
          lineHeight="30px"
        >
          Active Listing Self Storages
        </Heading>
        <Text
          color="#000103"
          fontSize="18px"
          textAlign="center"
          lineHeight="30px"
          mt="20px"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          quidem quo nobis amet Lorem ipsum dolor sit amet consectetur.
        </Text>
      </Box>
      <ActiveListingSearch />
      <Box
        w="100%"
        height="auto"
        bg="url(images/activebgImg.png)"
        bgSize="cover"
        bgRepeat="no-repeat"
        mt="-60px"
        overflow={"hidden"}
      >
        <Grid
          mt="120px"
          w="90%"
          justifyContent="center"
          align="center"
          mx="auto"
          templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap="20px"
        >
          {homePageActiveListings.map((listing) => (
            <GridItem justifySelf="center">
              <CardContainer
                key={listing.id}
                img={listing.img}
                totalUnits={listing.totalUnits}
                location={listing.location}
                occupancy={listing.occupancy}
                size={listing.size}
              />
            </GridItem>
          ))}
        </Grid>

        <Box w="fit-content" mx="auto" mt="78px" mb="93px">
          <Button
            bg="#FFCE31"
            color="#021850"
            fontSize="18px"
            fontWeight="medium"
            py="30px"
            px="88px"
            borderRadius="10px"
            w={["300px", "300px", "300px", "364px"]}
            h="80px"
          >
            View More Listings
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeActiveListings;
