import { IsString, IsInt, IsOptional, MinLength, MaxLength, IsDate } from 'class-validator';

export class CreatePayDto {
  // @IsInt()
  // userId: number;

  @IsString()
  @MinLength(1)
  @MaxLength(50)
  employmentType: string;

  @IsOptional()
  @IsInt()
  fixedSalary?: number;

  @IsOptional()
  @IsInt()
  hourWage?: number;

  @IsOptional()
  @IsInt()
  overtimePay?: number;

}
