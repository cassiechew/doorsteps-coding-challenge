import { ObjectType, Field } from '@nestjs/graphql';

/**
 * Will assume structure of
 * [
 *   {
 *     "name": "income",
 *     "type": "list"
 *   }
 * ]
 *
 * Types will be defined as:
 * - single
 * - multi
 * - list
 */

@ObjectType()
export class FieldObject {
  @Field(() => Boolean, { description: 'Type' })
  type: string;

  @Field(() => String, { description: 'Name' })
  name: string;
}
