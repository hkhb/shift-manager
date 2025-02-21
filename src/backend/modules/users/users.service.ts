import { User } from "@prisma/client";
import { UsersRepository } from "./users.repository";
import { Injectable } from "@nestjs/common";
import * as crypto from 'crypto';

@Injectable()
export class UsersService {
  constructor() {}
  /**
   * パスワード生成
   */
  async generateInitinalUserPassword(base: String, length: number): Promise<string> {
    return base + crypto.randomBytes(length).toString('hex');
    
  }
}