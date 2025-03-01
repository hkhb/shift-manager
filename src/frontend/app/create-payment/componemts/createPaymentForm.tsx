// TODO:
// 1. 入力フォームの表示
// 2. 入力されたデータの管理
// 3. バリデーションを行う
// 4.　バックエンドへ送信
'use client';

import React from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { FormLabel, FormControl, Input, Box, HStack, Button } from "@chakra-ui/react";
import BackButton from '@/components/features/backButton';

const CreatePaymentForm : React.FC = () => {
  type CreatePaymentFormInputs = {
    salary: number;
    hourWage: number;
    overPay: number;
  };

  const { register, handleSubmit } = useForm<CreatePaymentFormInputs>()

  const onSubmit: SubmitHandler<CreatePaymentFormInputs> = async (inputs) => {
    console.log("submit");  
    // セッションストレージからユーザーフォームデータを取得する
    const userFormData = sessionStorage.getItem('userFormData');
    console.log('取得されたデータ:', inputs);

    // ユーザー情報を作成する関数
    const createUser = async () => {
      try {
        if(userFormData){

          console.log("userFormData: ", userFormData);

          const response = await fetch('http://localhost:3001/users/new', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...JSON.parse(userFormData),
            }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const users = await response.json();
        }
        
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    await createUser();
  }

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} >
      <FormControl m={10}>
        <FormLabel>基本給</FormLabel> 
        <Input type='number' defaultValue={200000}{...register("salary")}
        placeholder="salary" />
      </FormControl>
      <FormControl m={10}>
        <FormLabel>時給</FormLabel> 
        <Input type='number' defaultValue={1000}{...register("hourWage")}
        placeholder="hourWage" />
      </FormControl>
      <FormControl m={10}>
        <FormLabel>残業代</FormLabel> 
        <Input type='number' defaultValue={1000}{...register("overPay")}
        placeholder="overPay" />
      </FormControl>

      <HStack m={10}>
        <BackButton />
        <Button type='submit' colorScheme='teal'>
          作成
        </Button>
      </HStack>
    </Box>
  )
}

export default CreatePaymentForm;