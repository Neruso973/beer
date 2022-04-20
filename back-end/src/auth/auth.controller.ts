import { Body, Controller, Post, Put } from '@nestjs/common';
import { User as UserModel, Prisma, User } from '@prisma/client';
import { AuthService } from './auth.service';
import { returnUser } from './interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() userData: Prisma.UserCreateInput): Promise<UserModel> {
    const { ...data } = userData;
    return this.authService.signup({
      ...data,
    });
  }

  @Post('signin')
  async signin(@Body() userData: Prisma.UserCreateInput): Promise<returnUser> {
    const { ...data } = userData;
    return this.authService.signin({
      ...data,
    });
  }

  @Put('update')
  async updateUser(@Body() userData: User): Promise<User> {
    return this.authService.updateUser(userData);
  }
}
