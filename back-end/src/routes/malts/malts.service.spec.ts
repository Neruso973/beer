import { Test, TestingModule } from '@nestjs/testing';
import { MaltsService } from './malts.service';

describe('MaltsService', () => {
  let service: MaltsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaltsService],
    }).compile();

    service = module.get<MaltsService>(MaltsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
