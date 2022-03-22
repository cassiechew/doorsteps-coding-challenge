import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateExperimentInput {
  @Field(() => Boolean, { description: 'Active' })
  active: boolean;

  @Field(() => String, { description: 'FieldName' })
  experimentName: string;

  @Field(() => String, { description: 'customFields' })
  customFields: string;
}
