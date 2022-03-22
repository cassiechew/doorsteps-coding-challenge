import { CreateFormResponseInput } from './create-form-response.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFormResponseInput extends PartialType(
  CreateFormResponseInput,
) {
  @Field(() => String, { description: 'Name' })
  name: string;

  @Field(() => String, { description: 'Email' })
  email: string;

  @Field(() => String, { description: 'Phone' })
  phone: string;

  @Field(() => String, { description: 'Experiment Data' })
  experimentData: string;
}
