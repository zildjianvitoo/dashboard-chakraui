import MyChart from "@/components/MyChart";
import DashboardTable from "./DashboardTable";
import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  IconButton,
  Link,
  Box,
  Button,
} from "@chakra-ui/react";
import { FiCalendar } from "react-icons/fi";
export default function MidColumn() {
  return (
    <Flex flexDir="column" w="55%" minH="100vh" p="3%" overflow="auto">
      <Heading letterSpacing="tight">
        <Text fontWeight="normal" display="inline-flex" mr="2">
          Welcome back,
        </Text>
        Zildjian
      </Heading>
      <Text mt="4" color="gray" fontSize="sm">
        My Balance
      </Text>
      <Text fontWeight="bold" fontSize="2xl">
        $9,999.98
      </Text>
      <Box mt="2">
        <MyChart />
      </Box>
      <Flex justifyContent="space-between" align="center" mt="7">
        <Flex align="flex-end">
          <Heading as="h2" fontWeight="bold" fontSize="3xl">
            Transaction
          </Heading>
          <Text fontSize="small" color="gray" alignSelf="flex-end" ml="4">
            April 2023
          </Text>
        </Flex>
        <IconButton icon={<FiCalendar />} />
      </Flex>
      <DashboardTable />
    </Flex>
  );
}
