import React from "react";
import { Image, Box, Flex, Heading, Text } from "@chakra-ui/react";

const CourseDetailHeader = () => {
  return (
    <Box w="100vw">
      <Box w={["80%", "80%", "80%", "1024px"]} mt="213px" mx="auto">
        <Image src="images/courseDetailHeaderImg.png" w="100%" />
        <Heading
          mt="50px"
          color="#2F2F2F"
          fontWeight={["semibold", "semibold", "bold"]}
          textAlign="Left"
          fontSize={["25px", "25px", "40px"]}
          lineHeight="30px"
        >
          Learn How To Buy A Self Storage
        </Heading>
        <Flex
          direction={["column", "column", "row", "row"]}
          mt="93px"
          w="100%"
          align={"center"}
          justify="space-between"
        >
          <Image src="images/vidImg.png" />
          <Box
            fontSize={"18px"}
            color="#000103"
            w={["80%", "80%", "567px", "567px"]}
            mt={["30px", "30px", "", ""]}
          >
            <Text align={["center", "center", "left"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              tempore impedit pariatur sunt aut, vel officiis officia ratione.
              Quia, accusantium? Ullam odit eveniet, numquam modi error officia
              reprehenderit iusto nemo. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Dolor, atque. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab, voluptatum! Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Cum veritatis modi iste
              molestias. Molestiae voluptate nihil ab, sed eveniet ea!
            </Text>
          </Box>
        </Flex>
        <Heading
          fontWeight={["semibold", "semibold", "bold"]}
          textAlign="left"
          fontSize={"26px"}
          mt="85px"
        >
          Heading Text Here
        </Heading>
        <Text mt="20px" fontSize={"18px"} color="#000103" lineHeight={-"30px"}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quidem
          quae, ipsam ullam iste voluptatem officia possimus iure illum
          quibusdam quis modi reprehenderit dicta autem deserunt quisquam. Eius
          officiis repellat incidunt dolorem? Adipisci veritatis consequuntur,
          impedit repellat blanditiis recusandae earum dolorum deserunt amet
          natus sapiente accusamus aperiam nobis distinctio corrupti nesciunt
          consequatur! Aliquam veritatis facilis ea delectus
          <br />
          <br />
          suscipit dolorem, autem mollitia officia. Aperiam ducimus veniam
          dolorem sapiente ratione accusantium illum, minus ex cumque eius
          dolorum provident ipsum rerum eum at, exercitationem sit reiciendis
          error nesciunt asperiores officia. Amet molestias aut ipsum
          <br />
          <br />
          dolor dolorum a debitis veniam corrupti? Nesciunt, asperiores amet.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          recusandae sapiente rem odio, tempora animi vel officia dolor deleniti
          atque ut iste minus. Dolores enim sunt, unde minus modi tenetur.
        </Text>
        <Heading
          fontWeight={["semibold", "semibold", "bold"]}
          textAlign="Left"
          fontSize={"22px"}
          mt="12px"
        >
          Heading Text Here
        </Heading>
        <Text lineHeight={-"30px"} mt="20px" fontSize={"18px"} color="#000103">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          dolore, illum fuga ipsam delectus accusamus, deserunt unde
          perspiciatis sequi iste, commodi doloribus expedita perferendis
          officiis tenetur possimus atque? Eveniet, earum, doloribus incidunt ut
          autem deserunt soluta voluptas architecto sed obcaecati nesciunt non
          aperiam neque facere iusto aut quis ducimus? Illum?
        </Text>
      </Box>
    </Box>
  );
};

export default CourseDetailHeader;
