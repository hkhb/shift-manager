'use client';

import React from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { FormLabel, FormControl, Input, Box, RadioGroup, Radio, HStack, FormHelperText, Textarea, Button } from "@chakra-ui/react";
import BackButton from '@/components/features/backButton';
import { useRouter } from 'next/navigation';

// TODO:
// 1. 入力フォームの表示
// 2. 入力されたデータの管理
// 3. バリデーションを行う
// 4. 支払いページに引き継ぐ
// 5. 前のページへ戻る

const CreateUserForm : React.FC = () => {
  type UserCreateFormInputs = {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    gender: string;
    employmentType: string;
    address: string;
  };

  const { register, handleSubmit, control } = useForm<UserCreateFormInputs>({
    defaultValues: {
      gender: 'male'  // WARN 性別のラジオボタンを表示が出来ない為、性別のデフォルト値を仮で'male'にしています。
    }
  })

  const router = useRouter();

  const onSubmit: SubmitHandler<UserCreateFormInputs> = (inputs) => {
    console.log("submit");  
    // セッションストレージにデータを保存する
    sessionStorage.setItem('userFormData', JSON.stringify(inputs));
    console.log('保存されたデータ:', inputs);
    router.push('../create-payment');
  }

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} >
      <FormControl isRequired m={10}>
        <FormLabel>名前(名)</FormLabel> 
        <Input type='text' {...register("firstName", { required: true })}
          placeholder="First name" />
      </FormControl>
      <FormControl isRequired m={10}>
        <FormLabel>名前(姓)</FormLabel> 
        <Input type='text' {...register("lastName", { required: true })}
        placeholder="last name" />
      </FormControl>
      <FormControl isRequired m={10}>
        <FormLabel>メール</FormLabel> 
        <Input type='email' {...register("email", { required: true })}
        placeholder="email" />
      </FormControl>
      <FormControl m={10}>
        <FormLabel>年齢</FormLabel> 
        <Input type='number' min={0} max={200} defaultValue={30}{...register("age")}
        placeholder="age" />
      </FormControl>

      <FormControl as='fieldset' m={10} w={150}>
        <FormLabel as='legend'>性別</FormLabel>
        <Controller
          name="gender"
          control={control}
          rules={{ required: '性別は必須です' }}
          render={({ field }) => (
            <RadioGroup {...field}>
              <HStack spacing='24px'>
                <Radio value='male'>男性</Radio>
                <Radio value='female'>女性</Radio>
              </HStack>
            </RadioGroup>
          )}
        />
        {Error.gender && <FormHelperText color="red.500">{Error.gender.message}</FormHelperText>}
      </FormControl>
      <FormControl isRequired m={10}>
        <FormLabel>雇用形態</FormLabel> 
        <Input type='text' {...register("employmentType", { required: true })}
        placeholder="employmentType" />
      </FormControl>
      <FormControl m={10}>
        <FormLabel>住所</FormLabel > 
        <Textarea minW={400} minH={50} {...register("address")}
        placeholder="address" ></Textarea>
      </FormControl>
      <HStack m={10}>
        <BackButton />
        {/* <Input type='submit' /> */}
        <Button type='submit' colorScheme='teal'>
          次へ
        </Button>
      </HStack>
    </Box>
  )
}

export default CreateUserForm;