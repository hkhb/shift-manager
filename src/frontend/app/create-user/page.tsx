import React from 'react';
import CreateUserForm from "./components/createUserForm";
import{ Box, Heading } from "@chakra-ui/react";
import Tab from '@/components/features/tab';

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
// 必要なコンポーネント
// ユーザー情報作成、支払い情報作成のリンク
//　タイトル
//　作成フォーム
  //　戻るボタン
  //　作成ボタン

export default function CreateUserPage() {
  return(
    <Box 
      w={800} 
      m={50} 
      border="1px solid black" 
      bg="rgb(222, 246, 246)" 
      color="black"
      // p={50}
    >
      <Tab />
      <Heading as="h1" size="xl" color="gray">ユーザー情報作成</Heading>
      <CreateUserForm />
  </Box>
  )
}

