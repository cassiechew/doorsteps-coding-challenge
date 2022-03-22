import { ObjectType, Field } from '@nestjs/graphql';
import { FieldObject } from './field.entity';

@ObjectType()
export class Experiment {
  @Field(() => Boolean, { description: 'Active' })
  active: boolean;

  @Field(() => String, { description: 'FieldName' })
  experimentName: string;

  @Field(() => String, { description: 'customFields' })
  customFields: string;
}
