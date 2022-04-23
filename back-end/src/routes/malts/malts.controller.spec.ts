import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma.service';
import { MaltsController } from './malts.controller';
import { MaltService } from './malts.service';

describe('MaltsController', () => {
  let controller: MaltsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaltService, PrismaService],
      controllers: [MaltsController],
    }).compile();

    controller = module.get<MaltsController>(MaltsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
