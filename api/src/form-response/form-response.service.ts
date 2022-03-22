import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateFormResponseInput } from './dto/create-form-response.input';
import { FormResponse } from './entities/form-response.entity';

const prisma = new PrismaClient();

@Injectable()
export class FormResponseService {
  async create(
    createFormResponseInput: CreateFormResponseInput,
  ): Promise<FormResponse> {
    const newForm = await prisma.formResponses.create({
      data: {
        name: createFormResponseInput.name,
        email: createFormResponseInput.email,
        phone: createFormResponseInput.phone,
        experimentData: JSON.parse(createFormResponseInput.experimentData),
      },
    });
    return {
      name: newForm.name,
      email: newForm.email,
      phone: newForm.phone,
      experimentData: JSON.stringify(newForm.experimentData),
    };
  }

  findAll() {
    return `This action returns all formResponse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} formResponse`;
  }
}
