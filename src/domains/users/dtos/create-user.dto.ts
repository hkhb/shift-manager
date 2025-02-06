import { IsBoolean, IsEmail, IsInt, IsOptional, IsString, Min, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(50)
  firstName: string;

  @IsString()
  @MaxLength(50)
  lastName: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  age?: number;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsInt()
  phoneNumber?: number;

  @IsBoolean()
  isAdmin: boolean;

  @IsString()
  @MaxLength(255)
  password: string;
}