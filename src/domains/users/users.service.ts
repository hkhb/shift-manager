import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserResponseDto } from '../dtos/user-response.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  async getUserById(id: number): Promise<UserResponseDto> {
    const user: User = await this.findUserInDatabase(id); // 仮のDB操作
    return plainToClass(UserResponseDto, user);
  }

  private async findUserInDatabase(id: number): Promise<User> {
    // ここでDB操作 (PrismaやTypeORM)
    return new User(); // 仮のデータ
  }
}