import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Beer, Prisma } from '@prisma/client';

@Injectable()
export class BeerService {
  constructor(private prisma: PrismaService) {}

  //Get all beers
  async getBeers(): Promise<Beer[]> {
    return this.prisma.beer.findMany();
  }

  //Get beer by ID
  async getBeerById(beerId: Prisma.BeerWhereUniqueInput): Promise<Beer | null> {
    return this.prisma.beer.findUnique({ where: beerId });
  }

  // create a new beer
  async createBeer(data: Prisma.BeerCreateInput): Promise<Beer> {
    return this.prisma.beer.create({
      data,
    });
  }

  // update a beer
  async updatebeer(params: {
    where: Prisma.BeerWhereUniqueInput;
    data: Prisma.BeerUpdateInput;
  }): Promise<Beer> {
    const { where, data } = params;
    return this.prisma.beer.update({
      data,
      where,
    });
  }

  //delete a beer
  async deleteBeer(where: Prisma.BeerWhereUniqueInput): Promise<Beer> {
    return this.prisma.beer.delete({
      where,
    });
  }
}
