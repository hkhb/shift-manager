import { Controller, Get, Post, Patch, Delete, Body, Query, Param, UsePipes, Put, ValidationPipe } from "@nestjs/common";
import { PaysService } from "./pays.service";
import { PaysRepository } from "./pays.repository";
import { CreatePayDto } from "../shared/create-pay.dto"
import { UpdatePayDto } from "../shared/update-pay.dto"
import { Prisma, Pay } from '@prisma/client';

@Controller('pays')
export class PaysController {
  constructor(private paysService: PaysService, private paysRepository: PaysRepository) {}

  //pay情報を表示 引数:id
  @Get(':id')
  async show(@Param('id') id: string){
    const showPay = await this.paysRepository.findById(parseInt(id));
    return showPay;
  }

  //pay情報を作成 引数:id
  // @Post('new/:id')
  // @UsePipes(new ValidationPipe())
  // async create(
  //   @Param('id') id: string,
  //   @Body() payDataForCreate: CreatePayDto): Promise<Pay>{
  //   const createPay = await this.paysRepository.create(payDataForCreate, parseInt(id));
  //   return createPay
  // }

  //pay情報を更新
  @Patch('edit/:id')
  @UsePipes(new ValidationPipe())
  async update(
    @Param('id') id: string,
    @Body() payDataForCreate: UpdatePayDto): Promise<Pay>{
    const updatePay = await this.paysRepository.update(payDataForCreate, parseInt(id));
    return updatePay
  }
}