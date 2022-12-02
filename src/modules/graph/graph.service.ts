import { GraphSingleton } from './entities/graph.singleton';
import { Injectable } from '@nestjs/common';
import { TransitionValues } from './interfaces/transitionValues.interface';

@Injectable()
class GraphService {
  findNextStatusByTransition(transition: Array<string>): number {
    return GraphSingleton.getInstance().transitions.find(
      (t) => JSON.stringify(t.rules) === JSON.stringify(transition),
    ).end;
  }

  findNextStatusByTransitionAndStatuses(
    transition: Array<string>,
    statuses: Array<number>,
  ): TransitionValues[] {
    const transitions = GraphSingleton.getInstance()
      .transitions.filter(
        (t) => JSON.stringify(t.rules) === JSON.stringify(transition),
      )
      .filter((t) => statuses.includes(t.start));

    return transitions.map((t) => {
      return {
        start: t.start,
        end: t.end,
      };
    });
  }

  getByTransition(): number {
    return this.findNextStatusByTransition(['RAS']);
  }

  getByTransitionAndStatus(): TransitionValues[] {
    return this.findNextStatusByTransitionAndStatuses(['RPS'], [4, 5, 3]);
  }
}

export { GraphService };
