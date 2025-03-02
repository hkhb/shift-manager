import React from 'react';
import { Button } from "@chakra-ui/react";

const BackButton: React.FC = () => {
  return (
    <Button onClick={()=> window.history.back()}>
      戻る
    </Button>
  );
};

export default BackButton;