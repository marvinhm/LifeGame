 # TDD Game of Life
 
 * [ ] Install dependencies
 * [ ] mocha chai @babel/core @babel/preset-env @babel/register
 * [ ] Setup Babel
 * [ ] { "presets": ["@babel/preset-env"] }
 * [ ] Setup test directory
 * [ ] Add test script
 * [ ] "test": "mocha --require @babel/register"
* CellState
 * [ ] Has an ALIVE state
 * [ ] Has a DEAD state
* Cell
 * [ ] Should be initialized with a cellState
 * [ ] Should die if it has fewer than 2 live nieghbors
 * [ ] getNextState(numNeighbors)
 * [ ] Should live with 2 or 3 live neighbors
 * [ ] Should die with more than 3 neighbors
 * [ ] Should come alive with exactly 3 neighbors
* Game
 * [ ] Should be initialized with a given state
 * [ ] Array of arrays of states
 * [ ] Should retrieve a cell at a given row and column
 * [ ] Should get the number of alive neighbors for a given cell
 * [ ] Should create the next state of the game
* TODO
 * [ ] Game set game state
 * [ ] Cell set state