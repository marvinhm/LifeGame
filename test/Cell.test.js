import { expect } from "chai";
import CellState from "../CellState.js";
import Cell from "../Cell.js";

describe('Cell', () => {
  it('Should be initialized with a cellState', () => {
    const aliveCell = new Cell(CellState.ALIVE);
    expect(aliveCell.state).to.equal(CellState.ALIVE)

    const deadCell = new Cell(CellState.DEAD);
    expect(deadCell.state).to.equal(CellState.DEAD)
  })

  it('Should die if it has fewer than 2 live neighbours', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextState = cell.getNextState(1);
    expect(nextState).to.eq(CellState.DEAD);
  })

  it('Should live if it has 2 to 3 live neighbours', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextState = cell.getNextState(2);
    expect(nextState).to.eq(CellState.ALIVE);

    const cell2 = new Cell(CellState.ALIVE);
    const nextState2 = cell2.getNextState(3);
    expect(nextState2).to.eq(CellState.ALIVE);
  })

  it('Should die if it has greater than 3 live neighbours', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextState = cell.getNextState(4);
    expect(nextState).to.eq(CellState.DEAD);
  })
})