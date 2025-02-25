import { Controller, Post, Body} from "@nestjs/common";
import { AuthRepository } from "./auth.repository";
import { LoginDto } from "../shared/login.dto";
import { User } from "@prisma/client/default";

@Controller('auth')
export class AuthController {
  constructor(private AuthRepository: AuthRepository) {}

  @Post('login')
  async login(@Body() loginFormData: LoginDto): Promise<User | null> {
    const existUser = await this.AuthRepository.checkExistUser(loginFormData);
    return existUser;
  }
  
  // @Post('changeInitialPassword')
  // async changeInitialPassword(@Body() changeInitialPasswordFormData: changeInitialPasswordDto): Promise<boolean>{
  //   const isChangeInitialPassword = await this.AuthRepository.changeInitialPassword(changeInitialPasswordFormData);
  //   return isChangeInitialPassword
  // }
}