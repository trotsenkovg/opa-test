import { GraphModel } from './graph.model';
import { NodeModel } from './node.model';
import { TransitionModel } from './transition.model';

class GraphSingleton {
  private static instance: GraphModel;

  public static getInstance() {
    if (!GraphSingleton.instance) {
      const nodes = [
        new NodeModel(1),
        new NodeModel(2),
        new NodeModel(3),
        new NodeModel(4),
        new NodeModel(5),
      ];

      const transitions = [
        new TransitionModel(1, 2, ['SAS']),
        new TransitionModel(2, 3, ['SPS']),
        new TransitionModel(3, 4, ['RUS']),
        new TransitionModel(4, 2, ['RPS']),
        new TransitionModel(4, 5, ['RAS', 'RBP']),
        new TransitionModel(5, 1, ['RAS']),
        new TransitionModel(5, 2, ['RPS']),
      ];
      GraphSingleton.instance = new GraphModel(nodes, transitions);
    }

    return GraphSingleton.instance;
  }
}

export { GraphSingleton };
