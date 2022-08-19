import { Box, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import CardContainer from "./Card";
import { featured } from "../dummy";
const Featured = () => {
  return (
    <Box boxSizing="border-box">
      <Box maxW="70vw" m="auto" mt="100px" mb="60px">
        <Heading
          color="#021850"
          fontWeight="semibold"
          textAlign="center"
          fontSize="35px"
          lineHeight="30px"
        >
          Featured Self Storages
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
      <Grid
        w="95%"
        margin="auto"
        templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
        gap="20px"
        justifyContent="center"
        alignItems="center"
      >
        {featured.map((feature) => (
          <GridItem justifySelf="center">
            <CardContainer
              location={feature.location}
              size={feature.size}
              occupancy={feature.occupancy}
              img={feature.img}
              key={feature.id}
              totalUnits={feature.totalUnits}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Featured;
