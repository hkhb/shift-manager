import React from 'react';
import { Box, Input, Button} from "@chakra-ui/react";
import { User } from '../page';

type SearchUserProps = {
  setUser: React.Dispatch<React.SetStateAction<User[]>>;
}
const marginProps = {
  margin: "10px"
}
const serachProp = {
  display: "flex"
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
    <>
      <Box {...serachProp}>
        <Input {...marginProps}/>
        <Button {...marginProps}>検索</Button>
      </Box>
    </>
    
  );
};

export default SearchUser;
