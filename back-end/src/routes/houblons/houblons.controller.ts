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
import { HoublonService } from './houblons.service';
import { Houblon as HoublonModel, Prisma } from '@prisma/client';
import { ParseIntParamsPipe } from 'src/pipe/ConvertParamToNumber.pipe';

@Controller('api/houblons')
export class HoublonsController {
  constructor(private readonly houblonService: HoublonService) {}

  @Get(':id')
  @UsePipes(ParseIntParamsPipe)
  async getHoublonById(@Param('id') id: number): Promise<HoublonModel> {
    return this.houblonService.getHoublonById({ id });
  }

  @Get()
  async getHoublons(): Promise<HoublonModel[]> {
    const houblons = await this.houblonService.getHoublons();
    if (houblons.length === 0) {
      throw new NotFoundException('no houblon was found');
    }
    return houblons;
  }

  @Post()
  async createHoublon(
    @Body() houblonsData: Prisma.HoublonCreateInput,
  ): Promise<HoublonModel> {
    const { ...data } = houblonsData;
    return this.houblonService.createHoublon({
      ...data,
    });
  }

  @Put(':id')
  @UsePipes(ParseIntParamsPipe)
  async updatehoublon(
    @Body() houblonsData: Prisma.HoublonUpdateInput,
    @Param('id') id: number,
  ): Promise<HoublonModel> {
    const { ...data } = houblonsData;
    return this.houblonService.updatehoublon({
      where: { id },
      data: { ...data },
    });
  }

  @Delete(':id')
  @UsePipes(ParseIntParamsPipe)
  async deleteHoublon(@Param('id') id: number): Promise<HoublonModel> {
    return this.houblonService.deleteHoublon({ id });
  }
}
