import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeersModule } from './beers/beers.module';
import { HoublonsModule } from './houblons/houblons.module';
import { PrismaService } from './prisma.service';
import { MaltsModule } from './malts/malts.module';
import { LevureModule } from './levure/levure.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BeersModule, HoublonsModule, MaltsModule, LevureModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
