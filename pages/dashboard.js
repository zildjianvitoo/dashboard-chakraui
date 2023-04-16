import React, { useState } from "react";

import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiCreditCard,
  FiSearch,
  FiBell,
} from "react-icons/fi";

import LeftColumn from "@/components/LeftColumn";
import MidColumn from "@/components/MidColumn";
import RightColumn from "@/components/RightColumn";

export default function Dashboard() {
  return (
    <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
      <LeftColumn />
      <MidColumn />
      <RightColumn />
    </Flex>
  );
}
