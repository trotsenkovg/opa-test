import { Controller, Get } from '@nestjs/common';
import { GraphService } from './graph.service';
import { TransitionValues } from './interfaces/transitionValues.interface';

@Controller()
export class GraphController {
  constructor(private readonly graphService: GraphService) {}

  @Get('/first')
  getByTransition(): number {
    return this.graphService.getByTransition();
  }

  @Get('/second')
  getByTransitionAndStatuses(): TransitionValues[] {
    return this.graphService.getByTransitionAndStatus();
  }
}
