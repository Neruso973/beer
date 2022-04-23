import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeersModule } from './routes/beers/beers.module';
import { HoublonsModule } from './routes/houblons/houblons.module';
import { PrismaService } from './prisma.service';
import { MaltsModule } from './routes/malts/malts.module';
import { LevureModule } from './routes/levure/levure.module';
import { AuthModule } from './routes/auth/auth.module';
import { UsersModule } from './routes/users/users.module';

@Module({
  imports: [
    AuthModule,
    BeersModule,
    HoublonsModule,
    MaltsModule,
    LevureModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
