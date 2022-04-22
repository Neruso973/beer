import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Put,
  UsePipes,
} from '@nestjs/common';
import { ParseIntParamsPipe } from 'src/pipe/ConvertParamToNumber.pipe';
import { User as UserModel } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
  @UsePipes(ParseIntParamsPipe)
  async getUserById(@Param('id') id: number): Promise<UserModel> {
    const user = await this.userService.getUserById({ id });
    if (!user) {
      throw new NotFoundException('No user found');
    }
    return user;
  }

  @Get(':username')
  async getUserByUsername(
    @Param('username') username: string,
  ): Promise<UserModel> {
    const user = await this.userService.getUserByUsername({ username });
    if (!user) {
      throw new NotFoundException('No user found');
    }
    return user;
  }

  @Get(':email')
  async getUserByMail(@Param('email') email: string): Promise<UserModel> {
    const user = await this.userService.getUserByMail({ email });
    if (!user) {
      throw new NotFoundException('No user found');
    }
    return user;
  }

  @Get()
  async getUsers(): Promise<UserModel[]> {
    const users = await this.userService.getUsers();
    if (users.length === 0) {
      throw new NotFoundException('No users found');
    }
    return users;
  }

  @Delete(':id')
  @UsePipes(ParseIntParamsPipe)
  async deleteUser(@Param('id') id: number): Promise<UserModel> {
    const user = await this.userService.getUserById({ id });
    if (!user) {
      throw new NotFoundException('No user can be delated');
    }
    return this.userService.deleteUser({ id });
  }
}
