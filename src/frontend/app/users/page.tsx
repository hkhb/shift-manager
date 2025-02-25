'use client';

import React, {useEffect} from 'react';
import UserList from './components/userList';

// ユーザーデータの型定義
interface User {
  id: number;
  name: string;
  email: string;
}

// サンプルユーザーデータ
const users: User[] = [
  { id: 1, name: '山田太郎', email: 'yamada@example.com' },
  { id: 2, name: '佐藤花子', email: 'sato@example.com' },
  { id: 3, name: '鈴木一郎', email: 'suzuki@example.com' },
];

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

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/users/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>ユーザー一覧</h1>
      <UserList users={users} />
    </div>
  );
}
