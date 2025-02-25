import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'
import { LoginDto } from '../shared/login.dto';
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
    // let token: string | null = null;
    // if(user){
    //   token = jwt.sign(
    //     { userId: user.id, admin: user.isAdmin, isitialPassword: user.isInitinalPassword },  // ペイロード部分に必要な情報を含める
    //   process.env.JWT_SECRET,                // 環境変数からシークレットキーを読み込む
    //   { expiresIn: '1h' } 
    //   )
    // }
    // return {status: user !== null,
    //         token: token
    // };
    return user;
  }
}