import { Module } from '@nestjs/common';
import { FormResponseService } from './form-response.service';
import { FormResponseResolver } from './form-response.resolver';

@Module({
  providers: [FormResponseResolver, FormResponseService]
})
export class FormResponseModule {}
