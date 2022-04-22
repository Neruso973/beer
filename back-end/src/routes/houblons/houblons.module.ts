import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { HoublonsController } from './houblons.controller';
import { HoublonService } from './houblons.service';

@Module({
  controllers: [HoublonsController],
  providers: [HoublonService, PrismaService],
})
export class HoublonsModule {}
