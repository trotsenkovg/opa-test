class TransitionModel {
  start: number;
  end: number;
  rules: Array<string>;

  constructor(
    private transitionStart: number,
    private transitionEnd: number,
    private transitionRules: Array<string>,
  ) {
    this.start = transitionStart;
    this.end = transitionEnd;
    this.rules = transitionRules;
  }
}

export { TransitionModel };
