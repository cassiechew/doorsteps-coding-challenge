import { CreateExperimentInput } from './create-experiment.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateExperimentInput extends PartialType(CreateExperimentInput) {
  @Field(() => String, { description: 'Experiment Name' })
  experimentName?: string;

  @Field(() => Boolean, { description: 'Active' })
  active: boolean;
}
