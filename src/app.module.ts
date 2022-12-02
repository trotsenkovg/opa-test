import { Module } from '@nestjs/common';
import { GraphModule } from './modules/graph/graph.module';

@Module({
  imports: [GraphModule],
})
export class AppModule {}
