import { Test, TestingModule } from '@nestjs/testing';
import { GetPlacesService } from './get-places.service';

describe('GetPlacesService', () => {
  let service: GetPlacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetPlacesService],
    }).compile();

    service = module.get<GetPlacesService>(GetPlacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
