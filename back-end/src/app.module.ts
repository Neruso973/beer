import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeersController } from './beers/beers.controller';
import { BeerService } from './beers/beers.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, BeersController],
  providers: [AppService, BeerService, PrismaService],
})
export class AppModule {}
