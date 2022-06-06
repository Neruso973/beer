import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BeersController } from './beers.controller';
import { BeerService } from './beers.service';

@Module({
  controllers: [BeersController],
  providers: [BeerService, PrismaService],
})
export class BeersModule {}
