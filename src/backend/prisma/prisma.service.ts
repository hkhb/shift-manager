import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // 必要に応じてログレベルなどのオプションを設定できます
    super({
      log: ['query', 'error', 'warn'],
    });
  }

  async onModuleInit() {
    // アプリケーション起動時にPrismaClientに接続
    await this.$connect();
  }

  async onModuleDestroy() {
    // アプリケーション終了時にPrismaClientを切断
    await this.$disconnect();
  }

  // トランザクションのためのヘルパーメソッド
  async executeInTransaction<T>(fn: (prisma: PrismaClient) => Promise<T>): Promise<T> {
    return this.$transaction(async (prisma) => {
      return await fn(prisma);
    });
  }
}