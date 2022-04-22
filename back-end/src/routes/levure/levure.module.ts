import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LevureController } from './levure.controller';
import { LevureService } from './levure.service';

@Module({
  controllers: [LevureController],
  providers: [LevureService, PrismaService],
})
export class LevureModule {}
