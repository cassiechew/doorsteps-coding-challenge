import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFormResponseInput {
  @Field(() => String, { description: 'Name' })
  name: string;

  @Field(() => String, { description: 'Email' })
  email: string;

  @Field(() => String, { description: 'Phone' })
  phone: string;

  @Field(() => String, { description: 'Experiment Data' })
  experimentData: string;
}
