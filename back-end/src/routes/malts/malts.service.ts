import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Malt, Prisma } from '@prisma/client';

@Injectable()
export class MaltService {
  post(arg0: { id: number }): Malt | PromiseLike<Malt> {
    throw new Error('Method not implemented.');
  }
  constructor(private prisma: PrismaService) {}

  //Get all malts
  async getMalts(): Promise<Malt[]> {
    return this.prisma.malt.findMany();
  }

  //Get malt by ID
  async getMaltById(maltId: Prisma.MaltWhereUniqueInput): Promise<Malt | null> {
    return this.prisma.malt.findUnique({ where: maltId });
  }

  // create a new malt
  async createMalt(data: Prisma.MaltCreateInput): Promise<Malt> {
    return this.prisma.malt.create({
      data,
    });
  }

  // update a malt
  async updatemalt(params: {
    where: Prisma.MaltWhereUniqueInput;
    data: Prisma.MaltUpdateInput;
  }): Promise<Malt> {
    const { where, data } = params;
    return this.prisma.malt.update({
      data,
      where,
    });
  }

  //delete a malt
  async deleteMalt(where: Prisma.MaltWhereUniqueInput): Promise<Malt> {
    return this.prisma.malt.delete({
      where,
    });
  }
}
