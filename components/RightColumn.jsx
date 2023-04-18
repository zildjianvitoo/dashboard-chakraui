import { useState } from "react";
import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { FiPlus, FiCreditCard, FiSearch, FiBell } from "react-icons/fi";
import MyCard from "./MyCard";

export default function RightColumn() {
  const [display, setDisplay] = useState("hidden");
  const [value, setValue] = useState(1);

  return (
    <Flex
      flexDir="column"
      w="30%"
      h="100vh"
      bgColor="#F5F5F5"
      p="3%"
      overflow="auto"
    >
      <Flex alignContent="center">
        <InputGroup borderRadius="lg">
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color="gray" />}
          />
          <Input
            bgColor="white"
            type="number"
            placeholder="Search"
            borderRadius="lg"
            w="95%"
            border="none"
          />
        </InputGroup>
        <IconButton
          mr="4"
          icon={<FiBell />}
          bgColor="white"
          borderRadius="full"
          fontSize="sm"
        />
        <Flex
          w={25}
          h={25}
          p="2"
          bgColor="pink.300"
          borderRadius="full"
          alignItems="center"
          fontSize="xs"
          color="white"
          ml="-7"
          mt="-2"
          justify="center"
          zIndex="4"
        >
          2
        </Flex>
      </Flex>
      <Heading mt="4" letterSpacing="tight">
        My Cards
      </Heading>
      {value === 1 && (
        <MyCard
          bgGradient={"linear(to-b,pink.500,green.200)"}
          balance={"2,781.99"}
          cardNumber={"9183"}
          validThru={"11/24"}
        />
      )}
      <Flex align="center" justify="center" columnGap="3" mt="2">
        <Button bgColor="gray.700" borderRadius="md" />
        <Button bgColor="gray.700" borderRadius="md" />
        <Button bgColor="gray.700" borderRadius="md" />
      </Flex>
    </Flex>
  );
}
