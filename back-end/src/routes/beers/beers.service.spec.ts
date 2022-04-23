import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma.service';
import { BeerService } from './beers.service';

describe('BeerService', () => {
  let service: BeerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeerService, PrismaService],
    }).compile();

    service = module.get<BeerService>(BeerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
