import { Test, TestingModule } from '@nestjs/testing';
import { AddCompanyController } from './add-company.controller';

describe('AddCompanyController', () => {
  let controller: AddCompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddCompanyController],
    }).compile();

    controller = module.get<AddCompanyController>(AddCompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
