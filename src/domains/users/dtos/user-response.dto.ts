import { Exclude } from 'class-transformer';

export class UserResponseDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age?: number;
  gender?: string;
  address?: string;
  phoneNumber?: number;
  isDeleted: boolean;
  isAdmin: boolean;
  isInitialPassword: boolean;
  createdAt: Date;
  updatedAt: Date;

  @Exclude() // パスワードはレスポンスに含めない
  password: string;
}