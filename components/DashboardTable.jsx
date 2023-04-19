import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import TableData from "./TableData";
import { data } from "@/utils/data";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
export default function DashboardTable() {
  const [isHidden, setHidden] = useState(true);

  const handleHidden = () => {
    if (isHidden === true) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  return (
    <Flex flexDir="column">
      <Flex overflow="auto">
        <Table variant="unstyled" mt="4" w="100%">
          <Thead>
            <Tr color="gray">
              <Th>NAME OF TRANSACTION</Th>
              <Th>Category</Th>
              <Th isNumeric>Cashback</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            {isHidden
              ? data.slice(0, 3).map((trx, index) => (
                  <Tr key={index}>
                    <TableData
                      productName={trx.productName}
                      category={trx.category}
                      date={trx.date}
                      cashback={trx.cashback}
                      imgUrl={trx.imgUrl}
                      amount={trx.amount}
                    />
                  </Tr>
                ))
              : data.map((trx, index) => (
                  <Tr key={index}>
                    <TableData
                      productName={trx.productName}
                      category={trx.category}
                      date={trx.date}
                      cashback={trx.cashback}
                      imgUrl={trx.imgUrl}
                      amount={trx.amount}
                    />
                  </Tr>
                ))}
          </Tbody>
        </Table>
      </Flex>
      <Flex align="center">
        <Divider />
        <IconButton
          icon={isHidden ? <FiChevronDown /> : <FiChevronUp />}
          onClick={handleHidden}
        />
        <Divider />
      </Flex>
    </Flex>
  );
}
