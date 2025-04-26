import { Controller, Get, Post, Patch, Delete, Body, Query, Param, UsePipes, Put } from "@nestjs/common";
import { PaysService } from "./pays.service";
import { PaysRepository } from "./pays.repository";
import { Prisma, Pay } from '@prisma/client';

@Controller('pays')
export class PaysController {
  constructor(private paysService: PaysService, private paysRepository: PaysRepository) {}

  @Get(':id')
  async show(@Param('id') id: string){
    const showPayment = await this.paysRepository.findById(parseInt(id));
    return showPayment;
  }
}