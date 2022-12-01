import { Controller, Get } from '@nestjs/common';
import { GraphService } from './graph/graph.service';

@Controller()
export class AppController {
  constructor(private readonly graphService: GraphService) {}

  @Get('/first')
  getByTransition(): number {
    return this.graphService.getByTransition();
  }

  @Get('/second')
  getByTransitionAndStatuses(): object {
    return this.graphService.getByTransitionAndStatus();
  }
}
