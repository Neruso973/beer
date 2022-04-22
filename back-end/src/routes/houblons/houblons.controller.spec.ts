import { Test, TestingModule } from '@nestjs/testing';
import { HoublonsController } from './houblons.controller';

describe('HoublonsController', () => {
  let controller: HoublonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HoublonsController],
    }).compile();

    controller = module.get<HoublonsController>(HoublonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
