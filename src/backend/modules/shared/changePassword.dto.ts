import { IsNumber, IsString } from 'class-validator';

export class ChangePasswordDto {

  @IsNumber()
  id: number;

  @IsString()
    password: string;
}