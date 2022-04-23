import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma.service';
import { BeersController } from './beers.controller';
import { BeerService } from './beers.service';

describe('BeersController', () => {
  let controller: BeersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeerService, PrismaService],
      controllers: [BeersController],
    }).compile();

    controller = module.get<BeersController>(BeersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
