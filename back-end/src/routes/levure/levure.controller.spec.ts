import { Test, TestingModule } from '@nestjs/testing';
import { LevureController } from './levure.controller';

describe('LevureController', () => {
  let controller: LevureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LevureController],
    }).compile();

    controller = module.get<LevureController>(LevureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
