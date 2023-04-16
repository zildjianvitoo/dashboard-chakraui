import { Flex, Td, Text, Avatar } from "@chakra-ui/react";

export default function TableData({
  imgUrl,
  productName,
  category,
  date,
  cashback,
  amount,
}) {
  return (
    <>
      <Td>
        <Flex align="center">
          <Avatar name={productName} size="sm" mr="3" src={imgUrl} />
          <Flex flexDirection="column">
            <Text fontWeight="bold">{productName}</Text>
            <Text fontSize="sm" color="gray">
              {date}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>{category}</Td>
      <Td isNumeric>+{cashback}</Td>
      <Td isNumeric>
        <Text display="inline-table" fontWeight="bold">
          -{amount}
        </Text>
        .00
      </Td>
    </>
  );
}
