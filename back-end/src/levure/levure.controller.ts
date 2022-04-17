import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { LevureService } from './levure.service';
import { Levure as LevureModel, Prisma } from '@prisma/client';

@Controller('levure')
export class LevureController {
  constructor(private readonly levureService: LevureService) {}

  @Get(':id')
  async getLevureById(@Param('id') id: string): Promise<LevureModel> {
    return this.levureService.getLevureById({ id: Number(id) });
  }

  @Get()
  async getLevure(): Promise<LevureModel[]> {
    return this.levureService.getLevure();
  }

  @Post()
  async createLevure(
    @Body() levureData: Prisma.LevureCreateInput,
  ): Promise<LevureModel> {
    const { ...data } = levureData;
    return this.levureService.createLevure({
      ...data,
    });
  }

  @Put(':id')
  async updatelevure(
    @Body() levureData: Prisma.LevureUpdateInput,
    @Param('id') id: string,
  ): Promise<LevureModel> {
    const { ...data } = levureData;
    return this.levureService.updatelevure({
      where: { id: Number(id) },
      data: { ...data },
    });
  }

  @Delete(':id')
  async deleteLevure(@Param('id') id: string): Promise<LevureModel> {
    return this.levureService.deleteLevure({ id: Number(id) });
  }
}
