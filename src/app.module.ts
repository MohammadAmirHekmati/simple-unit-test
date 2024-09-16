import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ ExampleService],
})
export class AppModule {}
