import React from "react";

import { Flex, Text, Button, Icon, IconButton } from "@chakra-ui/react";
import { CloseBtn, BlueBell, msgIcon, SendIconDark } from "../../Icons/Icons";
import Modal from "../Modal";
import InputComponent from "../Input";

export const ActiveListingsModal = ({ setModalIsShowing }) => {
  return (
    <Modal>
      <Flex w="100%" justify={"flex-end"}>
        <IconButton
          cursor={"pointer"}
          bg="transparent"
          _focus={{ bg: "transparent" }}
          _hover={{ bg: "transparent" }}
          icon={<CloseBtn />}
          onClick={() => setModalIsShowing(false)}
        />
      </Flex>
      <Flex
        w="70%"
        justify={"center"}
        align={"center"}
        direction={"column"}
        mx="auto"
        textAlign={"center"}
      >
        <Icon as={BlueBell} mt="11px" />
        <Text fontSize="25px" lineHeight={"40px"} mt="20px" mb="41px">
          We will alert you anytime we have this specific self storage
        </Text>
        <InputComponent
          w="100%"
          icon={msgIcon}
          placeholder="Your email address"
          bgcolor={"#f6f8fd"}
          placeColor={"#a1a6b1"}
        />
        <Button
          bgColor="#FFCE31"
          height="64px"
          px="30px"
          py="22px"
          w={"100%"}
          color={"#000103"}
          mt="25px"
          rightIcon={<Icon as={SendIconDark} />}
        >
          Notify Me
        </Button>
      </Flex>
    </Modal>
  );
};
