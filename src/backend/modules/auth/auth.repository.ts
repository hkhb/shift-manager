import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'
import { LoginDto } from '../shared/login.dto';
import { ChangePasswordDto } from '../shared/changePassword.dto';
import { User } from '@prisma/client/default';
// import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthRepository {
  constructor(private prisma: PrismaService){}

  //　引数　フォームの値　戻り値　true | false
  //　emailとpasswordと一致しているユーザーがあるか
  // 存在している場合は、true
  //　違う場合は、false
  
  async checkExistUser(loginFormData: LoginDto): Promise<User | null> {
    const user =  await this.prisma.user.findFirst({
      where: {email: loginFormData.email, password: loginFormData.password}
    });
    return user;
  }

  //　引数　フォームの値(id, newPassword)　戻り値　true | false
  //　idと一致しているユーザーがあるか
  // isInitialPasswordをfalseに
  // 存在している場合は、true
  //　違う場合は、false

  async changePassword(changePasswordFormData: ChangePasswordDto): Promise<boolean> {
    const user =  await this.prisma.user.update({
      where: {id: changePasswordFormData.id},
      data:{password: changePasswordFormData.password,
            isInitinalPassword: false
      }
    });
      return user? true : false;
  }
}