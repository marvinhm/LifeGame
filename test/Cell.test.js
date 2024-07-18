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

    const nextStateWith0Neighbour = cell.getNextState(0);
    expect(nextStateWith0Neighbour).to.eq(CellState.DEAD);

    const nextStateWith1Neighbour = cell.getNextState(1);
    expect(nextStateWith1Neighbour).to.eq(CellState.DEAD);
  })

  it('Should stay DEAD if it has fewer than 2 neighbours', () => {
    const cell = new Cell(CellState.DEAD);
    
    const nextStateWith0Neighbour = cell.getNextState(0);
    expect(nextStateWith0Neighbour).to.eq(CellState.DEAD);

    const nextStateWith1Neighbour = cell.getNextState(1);
    expect(nextStateWith1Neighbour).to.eq(CellState.DEAD);
  });

  it('Should stay DEAD if it has more than 3 neighbours', () => {
    const cell = new Cell(CellState.DEAD);
    
    const nextStateWith4Neighbour = cell.getNextState(4);
    expect(nextStateWith4Neighbour).to.eq(CellState.DEAD);

    const nextStateWith5Neighbour = cell.getNextState(5);
    expect(nextStateWith5Neighbour).to.eq(CellState.DEAD);
  });

  it('Should die if it has more than 3 live neighbours', () => {
    const cell = new Cell(CellState.ALIVE);
    
    const nextStateWith4Neighbour = cell.getNextState(4);
    expect(nextStateWith4Neighbour).to.eq(CellState.DEAD);

    const nextStateWith5Neighbour = cell.getNextState(5);
    expect(nextStateWith5Neighbour).to.eq(CellState.DEAD);
  })

  it('Should live if it has 2 to 3 live neighbours', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextStateWith2Neighbour = cell.getNextState(2);
    expect(nextStateWith2Neighbour).to.eq(CellState.ALIVE);

    const cell2 = new Cell(CellState.ALIVE);
    const nextStateWith3Neighbour = cell2.getNextState(3);
    expect(nextStateWith3Neighbour).to.eq(CellState.ALIVE);
  })

  it('Should come alive if it has 3 live neighbours', () => {
    const cell = new Cell(CellState.DEAD);
    const nextStateWith3Neighbour = cell.getNextState(3);
    expect(nextStateWith3Neighbour).to.eq(CellState.ALIVE);
  })
})