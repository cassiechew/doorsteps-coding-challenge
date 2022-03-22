// import { Query } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { Message } from './entities/app.entity';

@Resolver(() => Message)
export class AppResolver {
  constructor(private readonly appService: AppService) {}
}
