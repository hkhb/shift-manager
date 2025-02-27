import React from 'react';
import { User } from '../page';
import { TableContainer, Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users, ...props }: UserTableProps) => {

  const contentProps = {
    "maxW": "200px",
    "minW": "100px",
    "textAlign": "center",
    "color": "black",
    "p": "10px",
  }

  const linkProps = {
    "display": "block",
    "w": "auto",
    "h": "auto"
  }

  return (
    <TableContainer {...props}>
      <Table variant='simple' borderColor="gray.300" borderWidth="1px" >
        <Thead>
          <Tr>
            <Th {...contentProps}>名前</Th>
            <Th {...contentProps}>権限</Th>
            <Th {...contentProps}>パスワードリセット</Th>
            <Th {...contentProps}>削除</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
          users.map((user) => (
            <Tr key={user.id}>
              <Td {...contentProps}>{user.lastName + " " + user.firstName}</Td>
              <Td {...contentProps}>{user.isAdmin ? "管理者" : "-"}</Td>
              <Td {...contentProps}><Box as="a" {...linkProps} href="#">リセット</Box></Td>
              <Td {...contentProps}><Box as="a" {...linkProps} href="#">削除</Box></Td>  
            </Tr> 
          )) 
          }
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;