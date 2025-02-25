import { Controller, Post, Body, Put} from "@nestjs/common";
import { AuthRepository } from "./auth.repository";
import { LoginDto } from "../shared/login.dto";
import { ChangePasswordDto } from '../shared/changePassword.dto';
import { Prisma, User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private AuthRepository: AuthRepository) {}

  @Post('login')
  async login(@Body() loginFormData: LoginDto): Promise<User | null> {
    const existUser = await this.AuthRepository.checkExistUser(loginFormData);
    return existUser;
  }
  
  @Put('changePassword')
  async changePassword(@Body() changePasswordFormData: ChangePasswordDto){
    try {
      return await this.AuthRepository.changePassword(changePasswordFormData);
        } catch (error) {
          if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return {
              msg: "Record Not Found",
              statusCode: "404"
            };
          }
        }
  }
  @Put('resetToInitialPassword')
  async resetToInitialPassword(@Body() id: number){
    try {
      return await this.AuthRepository.resetToInitialPassword(id);
        } catch (error) {
          if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return {
              msg: "Record Not Found",
              statusCode: "404"
            };
          }
        }
  }
}