import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { returnUser } from './interface';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  async signup({
    username,
    password,
    email,
  }: Prisma.UserCreateInput): Promise<User> {
    // see if username exist
    const existingUserName = await this.usersService.getUserByUsername({
      username,
    });
    const existingUserMail = await this.usersService.getUserByMail({
      email,
    });

    if (existingUserName) {
      throw new BadRequestException('username already exist');
    }
    if (existingUserMail) {
      throw new BadRequestException('email already exist');
    }
    // Hash the password
    // Generate a salt
    const salt = randomBytes(8).toString('hex');
    //Hash the salt and password together
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    // Join hashed password and salt
    const result = salt + '.' + hash.toString('hex');
    // create user
    const newUser = { username, password: result, email };
    const user = await this.usersService.createUser(newUser);

    //return user
    return user;
  }

  async signin(data: Prisma.UserCreateInput): Promise<returnUser> {
    const username = data.username;
    const clearPassword = data.password;
    const user = await this.usersService.getUserByUsername({ username });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const [salt, storedhash] = user.password.split('.');
    const hash = (await scrypt(clearPassword, salt, 32)) as Buffer;

    if (storedhash !== hash.toString('hex')) {
      throw new BadRequestException('bad password');
    }
    const { password, ...userObject } = user;
    return userObject;
  }

  async updateUser(userData: User): Promise<User> {
    // see if username exist
    const username = userData.username;
    const email = userData.email;

    const existingUserName = await this.usersService.getUserByUsername({
      username,
    });
    const existingUserMail = await this.usersService.getUserByMail({
      email,
    });

    if (existingUserName) {
      throw new BadRequestException('username already exist');
    }
    if (existingUserMail) {
      throw new BadRequestException('email already exist');
    }
    // Hash the password
    // Generate a salt
    const salt = randomBytes(8).toString('hex');
    //Hash the salt and password together
    const hash = (await scrypt(userData.password, salt, 32)) as Buffer;
    // Join hashed password and salt
    const result = salt + '.' + hash.toString('hex');

    userData.password = result;

    return this.usersService.updateuser(userData);
  }
}
