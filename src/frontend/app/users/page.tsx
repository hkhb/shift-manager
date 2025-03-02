'use client';

import React, { useEffect, useState } from 'react';
import UserTable from './components/userTable';
import SearchUser from './components/serachUser';
import { Heading, Box, Link, Flex, ChakraProvider } from "@chakra-ui/react";
import CreateUserFrom from '../create-user/components/createUserForm';
import BackButton from '@/components/features/backButton';

export type User = {
  id: number,
  firstName: string,
  lastName: string,   
  email: string,   
  age: number,
  gender: string,
  address: string,
  phoneNumber: string,   
  isDeleted: boolean,   
  isAdmin: boolean,  
  password: string,
  isInitinalPassword: boolean,
  createdAt: Date, 
  updatedAt: Date,  
}

export default function UsersPage() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/users/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <ChakraProvider>
      <Box
        bg="white" 
        boxShadow="xl" 
        borderRadius="2xl" 
        p={6}>
        <Heading as="h1" size="xl" color="gray">ユーザー一覧</Heading>
        <Flex direction={"row"} mt={10} alignItems="center" gap={100}>
          <SearchUser setUsers={setUsers} />
          <Link href="../create-user" color="blue">ユーザー追加</Link>
        </Flex>
        <UserTable users={users} mt={50} />
      </Box>
    </ChakraProvider>
  );
}
