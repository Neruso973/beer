import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { HoublonService } from './houblons.service';
import { Houblon as HoublonModel, Prisma } from '@prisma/client';

@Controller('houblons')
export class HoublonsController {
  constructor(private readonly houblonService: HoublonService) {}

  @Get(':id')
  async getHoublonById(@Param('id') id: string): Promise<HoublonModel> {
    return this.houblonService.getHoublonById({ id: Number(id) });
  }

  @Get()
  async getHoublons(): Promise<HoublonModel[]> {
    return this.houblonService.getHoublons();
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
  async updatehoublon(
    @Body() houblonsData: Prisma.HoublonUpdateInput,
    @Param('id') id: string,
  ): Promise<HoublonModel> {
    const { ...data } = houblonsData;
    return this.houblonService.updatehoublon({
      where: { id: Number(id) },
      data: { ...data },
    });
  }

  @Delete(':id')
  async deleteHoublon(@Param('id') id: string): Promise<HoublonModel> {
    return this.houblonService.deleteHoublon({ id: Number(id) });
  }
}
