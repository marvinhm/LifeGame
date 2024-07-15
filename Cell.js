export default class Cell {
  constructor (state) {
    this.state = state
  }

  getNextState(neighboursCount) {
    return neighboursCount<2 || neighboursCount>3  ? 0 : 1;
  }
}