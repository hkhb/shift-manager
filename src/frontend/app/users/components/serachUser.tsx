import React from 'react';
import { User } from '../page';

type SearchUserProps = {
  setUser: React.Dispatch<React.SetStateAction<User[]>>;
}

// UI: 
//   必要なタグinput, button
// 状態管理:
//   入力値: inputタグに入力された文字列、　buttonが押されたか
// 挙動:
//   入力された文字列をbuttonが押された場合、テーブルに結果を反映。
//   文字列がなかった場合は検索ボタンは非活性
const SearchUser: React.FC<SearchUserProps> = ({ setUser }: SearchUserProps) => {  
  return (
    <></>
  );
};

export default SearchUser;
