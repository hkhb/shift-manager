import React from 'react';
import { User } from '../page';

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }: UserTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名前</th>
          <th>権限</th>
          <th>パスワードリセット</th>
          <th>削除</th>
        </tr>
      </thead>
      <tbody>
        {
         users.map((user) => (
          <tr key={user.id}>
            <td>{user.firstName + user.lastName}</td>
            <td>{user.isAdmin ? "管理者" : "-"}</td>
            <td><a href="#">リセット</a></td>
            <td><a href="#">削除</a></td>  
          </tr> 
         )) 
        }
      </tbody>
    </table>
  );
};

export default UserTable;