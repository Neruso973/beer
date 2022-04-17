import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Houblon, Prisma } from '@prisma/client';

@Injectable()
export class HoublonService {
  post(arg0: { id: number }): Houblon | PromiseLike<Houblon> {
    throw new Error('Method not implemented.');
  }
  constructor(private prisma: PrismaService) {}

  //Get all houblons
  async getHoublons(): Promise<Houblon[]> {
    return this.prisma.houblon.findMany();
  }

  //Get houblon by ID
  async getHoublonById(
    houblonId: Prisma.HoublonWhereUniqueInput,
  ): Promise<Houblon | null> {
    return this.prisma.houblon.findUnique({ where: houblonId });
  }

  // create a new houblon
  async createHoublon(data: Prisma.HoublonCreateInput): Promise<Houblon> {
    return this.prisma.houblon.create({
      data,
    });
  }

  // update a houblon
  async updatehoublon(params: {
    where: Prisma.HoublonWhereUniqueInput;
    data: Prisma.HoublonUpdateInput;
  }): Promise<Houblon> {
    const { where, data } = params;
    return this.prisma.houblon.update({
      data,
      where,
    });
  }

  //delete a houblon
  async deleteHoublon(where: Prisma.HoublonWhereUniqueInput): Promise<Houblon> {
    return this.prisma.houblon.delete({
      where,
    });
  }
}
