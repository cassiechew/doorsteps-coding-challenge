import { Test, TestingModule } from '@nestjs/testing';
import { FormResponseResolver } from './form-response.resolver';
import { FormResponseService } from './form-response.service';

describe('FormResponseResolver', () => {
  let resolver: FormResponseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormResponseResolver, FormResponseService],
    }).compile();

    resolver = module.get<FormResponseResolver>(FormResponseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
