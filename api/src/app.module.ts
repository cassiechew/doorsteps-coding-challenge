import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ExperimentsModule } from './experiments/experiments.module';
import { FormResponseModule } from './form-response/form-response.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      debug: false,
      playground: true,
    }),
    ExperimentsModule,
    FormResponseModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
