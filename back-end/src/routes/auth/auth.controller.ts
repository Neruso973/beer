import { Body, Controller, Post, Put, UsePipes } from '@nestjs/common';
import { User as UserModel, Prisma, User } from '@prisma/client';
import { JoiValidationPipe } from 'src/pipe/joi-validation.pipe';
import { AuthService } from './auth.service';
import { signupSchema, signinSchema } from '../../Schemas/joi-auth-schema';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @UsePipes(new JoiValidationPipe(signupSchema))
  async signup(@Body() userData: Prisma.UserCreateInput): Promise<UserModel> {
    const { ...data } = userData;
    return this.authService.signup({
      ...data,
    });
  }

  @Post('signin')
  @UsePipes(new JoiValidationPipe(signinSchema))
  async signin(@Body() userData: Prisma.UserCreateInput): Promise<{
    access_token: string;
  }> {
    const { ...data } = userData;
    return this.authService.signin({
      ...data,
    });
  }

  @Put('update')
  @UsePipes(new JoiValidationPipe(signupSchema))
  async updateUser(@Body() userData: User): Promise<User> {
    return this.authService.updateUser(userData);
  }
}
