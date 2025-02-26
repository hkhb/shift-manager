'use client';

import React, { useEffect, useState } from 'react';
import UserTable from './components/userTable';
import SearchUser from './components/serachUser';

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

// TODO
// 必要なコンポーネント
// 1. タイトル
// 2．検索マド
    // 挙動: 名前を入力するとヒットした名前をテーブルに表示(入力値:キーワード（部分検索LIKE '%keyword%'）、出力値:user)
// 3.　ユーザー作成ボタン
    // 挙動: ユーザの作成ページに遷移
// 4.　userのテーブル
    // 挙動: 受け取ったデータを元にテーブルを作成

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
    <div>
      <h1>ユーザー一覧</h1>
      <SearchUser />
      <UserTable users={users} />
    </div>
  );
}
