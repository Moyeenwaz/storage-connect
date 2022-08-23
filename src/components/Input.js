import React from "react";
import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";

const InputComponent = ({ icon, placeholder, bgcolor, widths, placeColor }) => {
  return (
    <InputGroup backgroundColor={bgcolor} w={widths}>
      <InputLeftElement children={<Icon as={icon} />} />
      <Input
        placeholder={placeholder}
        _placeholder={{
          color: { placeColor },
        }}
      />
    </InputGroup>
  );
};

export default InputComponent;
