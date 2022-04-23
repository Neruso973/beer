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
import { ParseIntParamsPipe } from 'src/pipe/ConvertParamToNumber.pipe';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('api/beers')
@Controller('api/beers')
export class BeersController {
  constructor(private readonly beerService: BeerService) {}

  @Get(':id')
  @UsePipes(ParseIntParamsPipe)
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

  @ApiBody({
    type: 'Prisma.BeerCreateInput',
    description: 'Store product structure',
  })
  @Post()
  async createBeer(
    @Body() beersData: Prisma.BeerCreateInput,
  ): Promise<BeerModel> {
    const { ...data } = beersData;
    return this.beerService.createBeer({
      ...data,
    });
  }

  @ApiBody({
    type: 'Prisma.BeerCreateInput',
    description: 'Store product structure',
  })
  @Put(':id')
  @UsePipes(ParseIntParamsPipe)
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
  @UsePipes(ParseIntParamsPipe)
  async deleteBeer(@Param('id') id: number): Promise<BeerModel> {
    const beer = await this.beerService.getBeerById({ id });
    if (!beer) {
      throw new NotFoundException('No beer can be delated');
    }
    return this.beerService.deleteBeer({ id });
  }
}
