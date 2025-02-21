import { User } from "@prisma/client";
import { UsersRepository } from "./users.repository";
import { Injectable } from "@nestjs/common";
import * as crypto from 'crypto';

@Injectable()
export class UsersService {
  constructor() {}

  //概要
  // generateUserPassword
  // 引数:　基礎となるもの(String), 作成したいバイト数(int) 返り値:生成されたパスワード
  //crypto.randomBytesで指定したバイト数のランダムなバッファを生成。
  //.toString('hex') で 16 進数の文字列に変換

  async generateUserPassword(base: String, length: number): Promise<string> {
    return base + crypto.randomBytes(length).toString('hex'); // 正しい使い方;
    
  }
}