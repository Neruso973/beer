import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma.service';
import { MaltService } from './malts.service';

describe('MaltsService', () => {
  let service: MaltService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaltService, PrismaService],
    }).compile();

    service = module.get<MaltService>(MaltService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
