import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  //Get all users
  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  //Get user by ID
  async getUserById(userId: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({ where: userId });
  }

  //Get user by username
  async getUserByUsername(
    username: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({ where: username });
  }

  //Get user by mail
  async getUserByMail(
    email: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({ where: email });
  }

  // create a new user
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  // update a user
  async updateuser(data: User): Promise<User> {
    const { id, ...body } = data;
    return this.prisma.user.update({
      data: body,
      where: { id },
    });
  }

  //delete a user
  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
