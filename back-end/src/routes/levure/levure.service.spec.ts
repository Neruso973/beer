import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma.service';
import { LevureService } from './levure.service';

describe('LevureService', () => {
  let service: LevureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LevureService, PrismaService],
    }).compile();

    service = module.get<LevureService>(LevureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
