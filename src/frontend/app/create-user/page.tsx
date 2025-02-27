import { useState } from "react";

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
// 必要なコンポーネント
// ユーザー情報作成、支払い情報作成のリンク
//　タイトル
//　作成フォーム
//　戻るボタン
//　作成ボタン

export default function CreateUserPage() {
  
}


export default function UserFrom({

  const [formData, setFormDate] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    employmentType: "",
    address: ""
  });

