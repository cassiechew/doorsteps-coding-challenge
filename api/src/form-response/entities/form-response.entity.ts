import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class FormResponse {
  @Field(() => String, { description: 'Name' })
  name: string;

  @Field(() => String, { description: 'Email' })
  email: string;

  @Field(() => String, { description: 'Phone' })
  phone: string;

  @Field(() => String, { description: 'Experiment Data' })
  experimentData: string;
}
