import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MaltsController } from './malts.controller';
import { MaltService } from './malts.service';

@Module({
  controllers: [MaltsController],
  providers: [MaltService, PrismaService],
})
export class MaltsModule {}
