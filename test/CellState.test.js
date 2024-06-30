import { expect } from 'chai';
import CellState from '../CellState.js';


describe ('CellState', () => {
  it('Should hava an ALIVE state', () => {
    expect(CellState.ALIVE).to.equal(1);
  });

  it('Should hava a DEAD state', () => {
    expect(CellState.DEAD).to.equal(0);
  });
})