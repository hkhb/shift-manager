import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'
import { LoginDto } from '../shared/login.dto';

@Injectable()
export class AuthRepository {
  constructor(private prisma: PrismaService){}
  
  async checkExistUser(loginFormData: LoginDto): Promise<boolean> {
    const user =  await this.prisma.user.findFirst({
      where: {email: loginFormData.email, password: loginFormData.password}
    });
    return user !== null;
  }
}

//　引数　フォームの値　戻り値　true | false
  //　emailとpasswordと一致しているユーザーがあるか
  // 存在している場合は、true
  //　違う場合は、false



  // constructor(private prisma: PrismaService) {}

  // async findUser 