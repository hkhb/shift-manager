import React from 'react';
import { Box, Flex } from "@chakra-ui/react";

const Tab: React.FC = () => {
  return (
    <Flex justify="space-between" width="100%">
      <Box as="a" href="create-user" color="black" mr="auto" ml="auto">
        ユーザー情報作成
      </Box>
      <Box as="a" href="create-payment" color="black"  mr="auto" ml="auto" bg="rgb(174, 254, 197)">
        支払い情報作成
      </Box>
    </Flex>
  );
};

export default Tab;