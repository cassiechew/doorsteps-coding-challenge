import { CreateExperimentInput } from './create-experiment.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class DisableExperimentInput extends PartialType(CreateExperimentInput) {
  @Field(() => String, { description: 'Experiment Name' })
  experimentName?: string;
}
