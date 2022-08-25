import React from "react";
import { Box } from "@chakra-ui/react";

const ModalBox = ({ children }) => {
  return (
    <Box
      position={"fixed"}
      top="0"
      right="0"
      w="100%"
      h="100vh"
      zIndex={"1000"}
      backgroundColor="rgba(0,0,0,0.7)"
    >
      <Box
        w={["80%", "80%", "605px"]}
        minH="461px"
        pb="45px"
        pt="28px"
        px="35px"
        position={"fixed"}
        top={["10%", "10%", "100px"]}
        right="50%"
        transform={"translateX(50%)"}
        z-index="99999999"
        bgColor={"#fff"}
        borderRadius="20px"
        overflow={"hidden"}
      >
        {children}
      </Box>
    </Box>
  );
};

const Modal = ({ children }) => {
  return (
    <>
      <ModalBox>{children}</ModalBox>
    </>
  );
};

export default Modal;
