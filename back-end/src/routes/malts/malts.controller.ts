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
import { MaltService } from './malts.service';
import { Malt as MaltModel, Prisma } from '@prisma/client';
import { ParseIntParamsPipe } from 'src/pipe/ConvertParamToNumber.pipe';

@Controller('api/malts')
export class MaltsController {
  constructor(private readonly maltService: MaltService) {}

  @Get(':id')
  @UsePipes(ParseIntParamsPipe)
  async getMaltById(@Param('id') id: number): Promise<MaltModel> {
    return this.maltService.getMaltById({ id });
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
  @UsePipes(ParseIntParamsPipe)
  async updatemalt(
    @Body() maltsData: Prisma.MaltUpdateInput,
    @Param('id') id: number,
  ): Promise<MaltModel> {
    const { ...data } = maltsData;
    return this.maltService.updatemalt({
      where: { id },
      data: { ...data },
    });
  }

  @Delete(':id')
  @UsePipes(ParseIntParamsPipe)
  async deleteMalt(@Param('id') id: number): Promise<MaltModel> {
    return this.maltService.deleteMalt({ id });
  }
}
