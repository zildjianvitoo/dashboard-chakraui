import NextLink from "next/link";
import { Flex, Heading, Link, Text, Avatar, Icon } from "@chakra-ui/react";
import { FiHome, FiPieChart, FiDollarSign, FiBox } from "react-icons/fi";

export default function LeftColumn() {
  return (
    <Flex
      w={{ base: "100%", lg: "15%" }}
      flexDir="column"
      backgroundColor="#020202"
      color="#fff"
    >
      <Flex
        flexDir={"column"}
        justifyContent="space-between"
        height={{ base: null, lg: "100vh" }}
      >
        <Flex as="nav" flexDir={"column"}>
          <Heading
            mt={{ base: "10", lg: "50" }}
            mb={[0, 30, 30, 100]}
            fontSize="4xl"
            letterSpacing="tight"
            alignSelf="center"
          >
            Vito.
          </Heading>
          <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            mt={{ base: "5" }}
          >
            <Flex
              fontSize="large"
              flexDir={{ base: "row", lg: "column" }}
              rowGap={6}
              justifyContent={{ base: "space-around", lg: "center" }}
              alignItems="center"
              w={"100%"}
            >
              <Link
                as={NextLink}
                href="/dashboard"
                _hover={{ textDecoration: "none" }}
                display="flex"
                flexDirection="row"
                columnGap={3}
              >
                <Icon as={FiHome} fontSize="2xl" color="pink.300" />
                <Text _hover={{ color: "pink.300" }}>Home</Text>
              </Link>
              <Link
                as={NextLink}
                href="/dashboard"
                _hover={{ textDecoration: "none" }}
                display="flex"
                flexDirection="row"
                columnGap={3}
                className="sidebar-items"
              >
                <Icon as={FiPieChart} fontSize="2xl" />
                <Text>Credit</Text>
              </Link>
              <Link
                as={NextLink}
                href="/dashboard"
                _hover={{ textDecoration: "none" }}
                display="flex"
                flexDirection="row"
                columnGap={3}
                className="sidebar-items"
              >
                <Icon as={FiDollarSign} fontSize="2xl" />
                <Text>Wallet</Text>
              </Link>
              <Link
                as={NextLink}
                href="/dashboard"
                _hover={{ textDecoration: "none" }}
                display="flex"
                flexDirection="row"
                columnGap={3}
                className="sidebar-items"
              >
                <Icon as={FiBox} fontSize="2xl" />
                <Text>Service</Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          mb={"10"}
          mt={{ base: "10" }}
        >
          <Avatar name="Zildjian Vito" src="avatar.png" />
          <Text textAlign="center" mt="2">
            Zildjian Vito
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
