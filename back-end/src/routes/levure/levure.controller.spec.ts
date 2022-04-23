import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma.service';
import { LevureController } from './levure.controller';
import { LevureService } from './levure.service';

describe('LevureController', () => {
  let controller: LevureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LevureService, PrismaService],
      controllers: [LevureController],
    }).compile();

    controller = module.get<LevureController>(LevureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
