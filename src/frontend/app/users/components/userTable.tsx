import React from 'react';
import { User } from '../page';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";
import Link from 'next/link'

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }: UserTableProps) => {

  const contentProps = {
    "maxW": "200px",
    "minW": "100px",
    "bg": "azure",
    "textAlign": "center",
    "color": "black",
    "p": "10px"
  }

  const linkProps = {
    "display": "block",
    "w": "auto",
    "h": "auto"
  }

  return (
    <Table>
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
            <Td {...contentProps}>{user.firstName + user.lastName}</Td>
            <Td {...contentProps}>{user.isAdmin ? "管理者" : "-"}</Td>
            <Td {...contentProps}><Box as="a" {...linkProps} href="#">リセット</Box></Td>
            <Td {...contentProps}><Box as="a" {...linkProps} href="#">削除</Box></Td>  
          </Tr> 
         )) 
        }
      </Tbody>
    </Table>
  );
};

export default UserTable;