import CellState from "./CellState.js";

export default class Cell {
  constructor (state) {
    this.state = state
  }

  getNextState(neighboursCount) {
    if(this.state === CellState.ALIVE) {
      return neighboursCount<2 || neighboursCount>3  ? CellState.DEAD : this.state;
    } else if(neighboursCount === 3) {
      return CellState.ALIVE
    }
    return this.state;
  }
}