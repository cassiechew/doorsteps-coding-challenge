import { Injectable } from '@nestjs/common';
import { CreateExperimentInput } from './dto/create-experiment.input';
import { UpdateExperimentInput } from './dto/update-experiment.input';
import { PrismaClient } from '@prisma/client';
import { DisableExperimentInput } from './dto/disable-experiment-input';
import { Experiment } from './entities/experiment.entity';

const prisma = new PrismaClient();

@Injectable()
export class ExperimentsService {
  async create(
    createExperimentInput: CreateExperimentInput,
  ): Promise<Experiment> {
    const newExperiment = await prisma.experiment.create({
      data: {
        experimentName: createExperimentInput.experimentName,
        active: createExperimentInput.active,
        customFields: JSON.parse(createExperimentInput.customFields),
      },
    });

    return {
      experimentName: newExperiment.experimentName,
      active: newExperiment.active,
      customFields: JSON.stringify(newExperiment.customFields),
    };
  }

  async findOne(name: string): Promise<Experiment> {
    const experiment = await prisma.experiment.findUnique({
      where: {
        experimentName: name,
      },
    });
    if (!experiment.active) {
      return {
        active: experiment.active,
        experimentName: '',
        customFields: '',
      };
    }
    return {
      experimentName: experiment.experimentName,
      active: experiment.active,
      customFields: JSON.stringify(experiment.customFields),
    };
  }

  async update(
    name: string,
    updateExperimentInput: UpdateExperimentInput,
  ): Promise<Experiment> {
    const experiment = await prisma.experiment.update({
      where: {
        experimentName: name,
      },
      data: {
        active: updateExperimentInput.active,
      },
    });
    return {
      experimentName: experiment.experimentName,
      active: experiment.active,
      customFields: JSON.stringify(experiment.customFields),
    };
  }

  async disable(
    disableExperimentInput: DisableExperimentInput,
  ): Promise<Experiment> {
    const experiment = await prisma.experiment.update({
      where: {
        experimentName: disableExperimentInput.experimentName,
      },
      data: {
        active: false,
      },
    });
    return {
      experimentName: experiment.experimentName,
      active: experiment.active,
      customFields: JSON.stringify(experiment.customFields),
    };
  }
}
