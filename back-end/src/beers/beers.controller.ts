import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { BeerService } from './beers.service';
import { Beer as BeerModel, Prisma } from '@prisma/client';

@Controller('beers')
export class BeersController {
  constructor(private readonly beerService: BeerService) {}

  @Get(':id')
  async getBeerById(@Param('id') id: string): Promise<BeerModel> {
    return this.beerService.getBeerById({ id: Number(id) });
  }

  @Get()
  async getBeers(): Promise<BeerModel[]> {
    return this.beerService.getBeers();
  }

  @Post()
  async createBeer(
    @Body() beersData: Prisma.BeerCreateInput,
  ): Promise<BeerModel> {
    const { ...data } = beersData;
    return this.beerService.createBeer({
      ...data,
    });
  }

  @Put(':id')
  async updatebeer(
    @Body() beersData: Prisma.BeerUpdateInput,
    @Param('id') id: string,
  ): Promise<BeerModel> {
    const { ...data } = beersData;
    return this.beerService.updatebeer({
      where: { id: Number(id) },
      data: { ...data },
    });
  }

  @Delete(':id')
  async deleteBeer(@Param('id') id: string): Promise<BeerModel> {
    return this.beerService.deleteBeer({ id: Number(id) });
  }
}
