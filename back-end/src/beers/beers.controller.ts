import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UsePipes,
  NotFoundException,
} from '@nestjs/common';
import { BeerService } from './beers.service';
import { Beer as BeerModel, Prisma } from '@prisma/client';
import { ConvertParamToNumberPipe } from 'src/pipe/ConvertParamToNumber.pipe';

@Controller('beers')
export class BeersController {
  constructor(private readonly beerService: BeerService) {}

  @Get(':id')
  @UsePipes(ConvertParamToNumberPipe)
  async getBeerById(@Param('id') id: number): Promise<BeerModel> {
    const beer = await this.beerService.getBeerById({ id });
    if (!beer) {
      throw new NotFoundException('No beer found');
    }
    return beer;
  }

  @Get()
  async getBeers(): Promise<BeerModel[]> {
    const beers = await this.beerService.getBeers();
    if (beers.length === 0) {
      throw new NotFoundException('No beers found');
    }
    return beers;
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
  @UsePipes(ConvertParamToNumberPipe)
  async updatebeer(
    @Param('id') id: number,
    @Body() beersData: Prisma.BeerUpdateInput,
  ): Promise<BeerModel> {
    const { ...data } = beersData;
    const beer = await this.beerService.getBeerById({ id });
    if (!beer) {
      throw new NotFoundException('No beer can be updated');
    }
    return this.beerService.updatebeer({
      where: { id },
      data: { ...data },
    });
  }

  @Delete(':id')
  @UsePipes(ConvertParamToNumberPipe)
  async deleteBeer(@Param('id') id: number): Promise<BeerModel> {
    const beer = await this.beerService.getBeerById({ id });
    if (!beer) {
      throw new NotFoundException('No beer can be delated');
    }
    return this.beerService.deleteBeer({ id });
  }
}
