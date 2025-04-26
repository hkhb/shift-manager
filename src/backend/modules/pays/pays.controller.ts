import { Controller, Get, Post, Patch, Delete, Body, Query, Param, UsePipes, Put, Search } from "@nestjs/common";
import { PaysService } from "./pays.service.ts";
import { PaysRepository } from "./pays.repository.ts";
import { CreateUserDto } from "../shared/create-user.dto.ts";
import { UpdateUserDto } from "../shared/update-user.dto.ts";
import { Prisma, User } from '@prisma/client';

@Controller('users')
export class PaysController {
  constructor(private PaysService: PaysService, private PaysRepository: PaysRepository) {}

  @Get(':id')
  async show(@Param('id') id: string){
    const showPayment = await this.PaysRepository.findById(parseInt(id));
    return showPayment;
  }
}