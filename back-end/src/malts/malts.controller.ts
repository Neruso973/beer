import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { MaltService } from './malts.service';
import { Malt as MaltModel, Prisma } from '@prisma/client';

@Controller('malts')
export class MaltsController {
  constructor(private readonly maltService: MaltService) {}

  @Get(':id')
  async getMaltById(@Param('id') id: string): Promise<MaltModel> {
    return this.maltService.getMaltById({ id: Number(id) });
  }

  @Get()
  async getMalts(): Promise<MaltModel[]> {
    return this.maltService.getMalts();
  }

  @Post()
  async createMalt(
    @Body() maltsData: Prisma.MaltCreateInput,
  ): Promise<MaltModel> {
    const { ...data } = maltsData;
    return this.maltService.createMalt({
      ...data,
    });
  }

  @Put(':id')
  async updatemalt(
    @Body() maltsData: Prisma.MaltUpdateInput,
    @Param('id') id: string,
  ): Promise<MaltModel> {
    const { ...data } = maltsData;
    return this.maltService.updatemalt({
      where: { id: Number(id) },
      data: { ...data },
    });
  }

  @Delete(':id')
  async deleteMalt(@Param('id') id: string): Promise<MaltModel> {
    return this.maltService.deleteMalt({ id: Number(id) });
  }
}
