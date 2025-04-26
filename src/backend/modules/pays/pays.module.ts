import { Module } from "@nestjs/common";
import { PaysRepository } from "./pays.repository";
import { PaysService } from "./pays.service";
import { PaysController } from "./pays.controller";

@Module({
  controllers: [PaysController],
  providers: [PaysService, PaysRepository],
  exports: [PaysService]
})
export class PaysModule{}