import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma.service';
import { HoublonsController } from './houblons.controller';
import { HoublonService } from './houblons.service';

describe('HoublonsController', () => {
  let controller: HoublonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HoublonService, PrismaService],
      controllers: [HoublonsController],
    }).compile();

    controller = module.get<HoublonsController>(HoublonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
