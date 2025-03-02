import React from 'react';
import{ Box, Heading } from "@chakra-ui/react";
import Tab from '@/components/features/tab';
import CreatePaymentForm from './componemts/createPaymentForm';

//必要なコンポーネント
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
      bg="#ADFFC5"
      color="black"
    >
      <Tab />
      <Heading as="h1" size="xl" color="gray">支払い情報作成</Heading>
      <CreatePaymentForm />
  </Box>
    );
  }

