import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphService } from './graph/graph.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GraphService],
})
export class AppModule {}
