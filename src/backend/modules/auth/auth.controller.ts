import { Controller, Post, Body} from "@nestjs/common";
import { AuthRepository } from "./auth.repository";
import { LoginDto } from "../shared/login.dto";

@Controller('auth')
export class AuthController {
  constructor(private AuthRepository: AuthRepository) {}

  @Post('login')
    async login(@Body() loginFormData: LoginDto): Promise<string> {
      const isExistUser = await this.AuthRepository.checkExistUser(loginFormData);
      return isExistUser;
    }
  }   