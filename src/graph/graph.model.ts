import { NodeModel } from '../node/node.model';
import { TransitionModel } from '../transition/transition.model';

class GraphModel {
  nodes: Array<NodeModel>;
  transitions: Array<TransitionModel>;

  constructor(
    private nodeModels: Array<NodeModel>,
    private transitionModel: Array<TransitionModel>,
  ) {
    this.nodes = nodeModels;
    this.transitions = transitionModel;
  }
}

export { GraphModel };
