import { Body, Controller, Param, Post, Put, UsePipes } from '@nestjs/common';
import { User as UserModel, Prisma, User } from '@prisma/client';
import { JoiValidationPipe } from 'src/pipe/joi-validation.pipe';
import { AuthService } from './auth.service';
import {
  signupSchema,
  signinSchema,
  updateSchema,
} from '../../Schemas/joi-auth-schema';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ParseIntParamsPipe } from 'src/pipe/ConvertParamToNumber.pipe';

@ApiTags('api/auth')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({
    type: 'Prisma.BeerCreateInput',
    description: 'Store product structure',
  })
  @Post('signup')
  @UsePipes(new JoiValidationPipe(signupSchema))
  async signup(@Body() userData: Prisma.UserCreateInput): Promise<UserModel> {
    const { ...data } = userData;
    return this.authService.signup({
      ...data,
    });
  }

  @ApiBody({
    type: 'Prisma.BeerCreateInput',
    description: 'Store product structure',
  })
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

  @ApiBody({
    type: 'Prisma.BeerCreateInput',
    description: 'Store product structure',
  })
  @Put('update/:id')
  @UsePipes(ParseIntParamsPipe)
  @UsePipes(new JoiValidationPipe(updateSchema))
  async updateUser(
    @Param('id') id: number,
    @Body() userData: User,
  ): Promise<User> {
    console.log(userData);
    return this.authService.updateUser(id, userData);
  }
}
