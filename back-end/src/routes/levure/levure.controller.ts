import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { LevureService } from './levure.service';
import { Levure as LevureModel, Prisma } from '@prisma/client';
import { ParseIntParamsPipe } from 'src/pipe/ConvertParamToNumber.pipe';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('api/levure')
@Controller('api/levure')
export class LevureController {
  constructor(private readonly levureService: LevureService) {}

  @Get(':id')
  @UsePipes(ParseIntParamsPipe)
  async getLevureById(@Param('id') id: number): Promise<LevureModel> {
    return this.levureService.getLevureById({ id });
  }

  @Get()
  async getLevure(): Promise<LevureModel[]> {
    return this.levureService.getLevure();
  }

  @ApiBody({
    type: 'Prisma.BeerCreateInput',
    description: 'Store product structure',
  })
  @Post()
  async createLevure(
    @Body() levureData: Prisma.LevureCreateInput,
  ): Promise<LevureModel> {
    const { ...data } = levureData;
    return this.levureService.createLevure({
      ...data,
    });
  }

  @ApiBody({
    type: 'Prisma.BeerCreateInput',
    description: 'Store product structure',
  })
  @Put(':id')
  @UsePipes(ParseIntParamsPipe)
  async updatelevure(
    @Body() levureData: Prisma.LevureUpdateInput,
    @Param('id') id: number,
  ): Promise<LevureModel> {
    const { ...data } = levureData;
    return this.levureService.updatelevure({
      where: { id },
      data: { ...data },
    });
  }

  @Delete(':id')
  @UsePipes(ParseIntParamsPipe)
  async deleteLevure(@Param('id') id: number): Promise<LevureModel> {
    return this.levureService.deleteLevure({ id });
  }
}
