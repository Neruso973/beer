import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Levure, Prisma } from '@prisma/client';

@Injectable()
export class LevureService {
  post(arg0: { id: number }): Levure | PromiseLike<Levure> {
    throw new Error('Method not implemented.');
  }
  constructor(private prisma: PrismaService) {}

  //Get all levure
  async getLevure(): Promise<Levure[]> {
    return this.prisma.levure.findMany();
  }

  //Get levure by ID
  async getLevureById(
    levureId: Prisma.LevureWhereUniqueInput,
  ): Promise<Levure | null> {
    return this.prisma.levure.findUnique({ where: levureId });
  }

  // create a new levure
  async createLevure(data: Prisma.LevureCreateInput): Promise<Levure> {
    return this.prisma.levure.create({
      data,
    });
  }

  // update a levure
  async updatelevure(params: {
    where: Prisma.LevureWhereUniqueInput;
    data: Prisma.LevureUpdateInput;
  }): Promise<Levure> {
    const { where, data } = params;
    return this.prisma.levure.update({
      data,
      where,
    });
  }

  //delete a levure
  async deleteLevure(where: Prisma.LevureWhereUniqueInput): Promise<Levure> {
    return this.prisma.levure.delete({
      where,
    });
  }
}
