import { Box, Flex, Text, Icon, Heading } from "@chakra-ui/react";

import { FiCreditCard } from "react-icons/fi";

export default function MyCard({ bgGradient, balance, cardNumber, validThru }) {
  return (
    <Box
      mt="4"
      p="4"
      bgGradient={bgGradient}
      borderRadius="3xl"
      color="white"
      alignSelf="center"
      minW={{ base: "350px", lg: "100%" }}
    >
      <Flex justifyContent="space-between" align="center">
        <Text color="gray.300">Current Balance</Text>
        <Flex justify="center" align="center" columnGap="2">
          <Icon as={FiCreditCard} />
          <Text>Vito.</Text>
        </Flex>
      </Flex>
      <Heading as="h3" fontSize="xl" mt="1">
        ${balance}
      </Heading>
      <Text mt="1">**** **** **** {cardNumber}</Text>
      <Flex mt="4" justify="space-between">
        <Flex columnGap="4">
          <Flex flexDirection="column">
            <Text fontSize="xs">VALID THRU</Text>
            <Text fontSize="lg">{validThru}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Text fontSize="xs">CVV</Text>
            <Text fontSize="lg">***</Text>
          </Flex>
        </Flex>
        <Icon as={FiCreditCard} alignSelf="flex-end" />
      </Flex>
    </Box>
  );
}
