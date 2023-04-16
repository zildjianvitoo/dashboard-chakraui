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

export default function RightColumn() {
  return (
    <Flex
      flexDir="column"
      w="35%"
      h="100vh"
      bgColor="#F5F5F5"
      p="3%"
      overflow="auto"
    ></Flex>
  );
}
