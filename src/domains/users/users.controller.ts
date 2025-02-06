import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  // constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.usersService.findOne(id);
    return `Hello hoge ${id}`;
  }
}