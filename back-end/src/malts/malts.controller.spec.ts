import { Test, TestingModule } from '@nestjs/testing';
import { MaltsController } from './malts.controller';

describe('MaltsController', () => {
  let controller: MaltsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaltsController],
    }).compile();

    controller = module.get<MaltsController>(MaltsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
