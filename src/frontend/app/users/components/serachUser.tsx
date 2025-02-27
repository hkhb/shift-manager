import { Box, Input, Button} from "@chakra-ui/react";
import { User } from '../page';
import React, { useEffect, useState } from 'react';

type SearchUserProps = {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}
const marginProps = {
  margin: "10px"
}
const serachProp = {
  display: "flex"
}

const SearchUser: React.FC<SearchUserProps> = ({ setUsers }: SearchUserProps) => {

  const [filterName, setFilterName] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setFilterName(e.target.value);
  const handleButtonClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const searchUsersByName = async () => {
      try {
        const response = await fetch(`http://localhost:3001/users/search?searchName=${filterName}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const users = await response.json();
        setUsers(users)
      } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error(`'Error fetching users:', ${error}`);
      }
    }
    searchUsersByName();
  }

  return (
    <Box {...serachProp}>
      <Input onChange={handleInputChange} {...marginProps}/>
      <Button isDisabled={filterName === ""} onClick={handleButtonClick} {...marginProps}>検索</Button>
    </Box>
  );
};

export default SearchUser;
