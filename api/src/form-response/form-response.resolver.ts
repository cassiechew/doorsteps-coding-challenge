import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FormResponseService } from './form-response.service';
import { FormResponse } from './entities/form-response.entity';
import { CreateFormResponseInput } from './dto/create-form-response.input';

@Resolver(() => FormResponse)
export class FormResponseResolver {
  constructor(private readonly formResponseService: FormResponseService) {}

  @Mutation(() => FormResponse)
  createFormResponse(
    @Args('createFormResponseInput')
    createFormResponseInput: CreateFormResponseInput,
  ) {
    return this.formResponseService.create(createFormResponseInput);
  }

  @Query(() => [FormResponse], { name: 'formResponse' })
  findAll() {
    return this.formResponseService.findAll();
  }

  @Query(() => FormResponse, { name: 'formResponse' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.formResponseService.findOne(id);
  }
}
