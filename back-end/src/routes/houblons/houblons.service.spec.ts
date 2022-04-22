import { Test, TestingModule } from '@nestjs/testing';
import { HoublonsService } from './houblons.service';

describe('HoublonsService', () => {
  let service: HoublonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HoublonsService],
    }).compile();

    service = module.get<HoublonsService>(HoublonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
