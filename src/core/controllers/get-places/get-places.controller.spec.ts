import { Test, TestingModule } from '@nestjs/testing';
import { GetPlacesController } from './get-places.controller';

describe('GetPlacesController', () => {
  let controller: GetPlacesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetPlacesController],
    }).compile();

    controller = module.get<GetPlacesController>(GetPlacesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
