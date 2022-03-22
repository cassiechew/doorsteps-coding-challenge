import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExperimentsService } from './experiments.service';
import { Experiment } from './entities/experiment.entity';
import { CreateExperimentInput } from './dto/create-experiment.input';
import { UpdateExperimentInput } from './dto/update-experiment.input';
import { DisableExperimentInput } from './dto/disable-experiment-input';

@Resolver(() => Experiment)
export class ExperimentsResolver {
  constructor(private readonly experimentsService: ExperimentsService) {}

  @Mutation(() => Experiment)
  createExperiment(
    @Args('createExperimentInput') createExperimentInput: CreateExperimentInput,
  ) {
    return this.experimentsService.create(createExperimentInput);
  }

  @Query(() => Experiment, { name: 'experiment' })
  findOne(@Args('name', { type: () => String }) name: string) {
    return this.experimentsService.findOne(name);
  }

  @Mutation(() => Experiment)
  updateExperiment(
    @Args('updateExperimentInput') updateExperimentInput: UpdateExperimentInput,
  ) {
    return this.experimentsService.update(
      updateExperimentInput.experimentName,
      updateExperimentInput,
    );
  }

  @Mutation(() => Experiment)
  disableExperiment(
    @Args('updateExperimentInput')
    disableExperimentInput: DisableExperimentInput,
  ) {
    return this.experimentsService.disable(disableExperimentInput);
  }
}
