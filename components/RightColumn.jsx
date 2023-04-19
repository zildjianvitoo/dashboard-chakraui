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
  FormLabel,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import {
  FiPlus,
  FiCreditCard,
  FiSearch,
  FiBell,
  FiDollarSign,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import MyCard from "./MyCard";

export default function RightColumn() {
  const [display, setDisplay] = useState("hidden");
  const [value, setValue] = useState(1);

  return (
    <Flex
      flexDir="column"
      w={["100%", "100%", "100%", "35%", "35%"]}
      h={["100%", "100%", "100%", "100vh"]}
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
      <Heading
        mt="4"
        letterSpacing="tight"
        textAlign={{ base: "center", lg: "left" }}
      >
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
      {value === 2 && (
        <MyCard
          bgGradient={"linear(to-b,#103783,#9bafd9)"}
          balance={"4,433.94"}
          cardNumber={"0122"}
          validThru={"09/26"}
        />
      )}
      {value === 3 && (
        <MyCard
          bgGradient={"linear(to-b,#42047e,#0061ff)"}
          balance={"9,123.45"}
          cardNumber={"2311"}
          validThru={"12/23"}
        />
      )}
      <Flex align="center" justify="center" columnGap="3" mt="2">
        <Button
          bgColor={value === 1 ? "gray.600" : "gray.400"}
          borderRadius="md"
          size="xs"
          onClick={() => setValue(1)}
        />
        <Button
          bgColor={value === 2 ? "gray.600" : "gray.400"}
          borderRadius="md"
          size="xs"
          onClick={() => setValue(2)}
        />
        <Button
          bgColor={value === 3 ? "gray.600" : "gray.400"}
          borderRadius="md"
          size="xs"
          onClick={() => setValue(3)}
        />
      </Flex>
      <Flex flexDir="column" my="3" rowGap="2">
        <Flex justify="space-between">
          <Text>Balance</Text>
          <Text fontWeight="bold">$2900.99</Text>
        </Flex>
        <Flex justify="space-between">
          <Text>Credit Limit</Text>
          <Text fontWeight="bold">$5000.00</Text>
        </Flex>
      </Flex>
      <Heading fontSize="xl" mt="5" columnGap="2">
        Send Money To
      </Heading>
      <Flex mt="4" align="center">
        <AvatarGroup size="md" max={3}>
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </AvatarGroup>
        <IconButton
          ml="4"
          icon={<FiPlus />}
          bgColor="#CBD5E0"
          borderRadius="full"
          size="lg"
          fontSize="md"
        />
      </Flex>
      <Flex mt="8" flexDir="column">
        <FormLabel htmlFor="cardNumber">
          <Text color="gray" fontWeight="normal">
            Card number
          </Text>
        </FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FiCreditCard />} />
          <Input
            type="number"
            id="cardNumber"
            placeholder="xxxx xxxx xxxx xxxx"
          />
        </InputGroup>
      </Flex>
      <Flex mt="4" flexDir="column">
        <FormLabel htmlFor="sum">
          <Text color="gray" fontWeight="normal">
            Sum
          </Text>
        </FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FiDollarSign />} />
          <Input type="number" id="sum" placeholder="$999.00" />
        </InputGroup>
      </Flex>

      <Button
        color="white"
        bgColor="black"
        mt="5"
        p="7"
        borderRadius="xl"
        w="full"
        _hover={{ color: "black", bgColor: "white" }}
      >
        Send money
      </Button>
    </Flex>
  );
}
