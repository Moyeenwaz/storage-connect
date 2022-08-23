import React from "react";
import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";

const InputComponent = ({
  icon,
  placeholder,
  bgcolor,
  widths,
  placeColor,
  onChange,
}) => {
  return (
    <InputGroup w={widths} backgroundColor={bgcolor}>
      <InputLeftElement children={<Icon as={icon} />} />
      <Input
        placeholder={placeholder}
        _placeholder={{
          color: { placeColor },
        }}
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default InputComponent;
