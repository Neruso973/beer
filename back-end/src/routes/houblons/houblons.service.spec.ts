import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma.service';
import { HoublonService } from './houblons.service';

describe('HoublonsService', () => {
  let service: HoublonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HoublonService, PrismaService],
    }).compile();

    service = module.get<HoublonService>(HoublonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
