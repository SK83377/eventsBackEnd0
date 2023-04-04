import { Test, TestingModule } from '@nestjs/testing';
import { AddCompanyService } from './add-company.service';

describe('AddCompanyService', () => {
  let service: AddCompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddCompanyService],
    }).compile();

    service = module.get<AddCompanyService>(AddCompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
