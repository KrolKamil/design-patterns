type Color = "RED" | "BLUE";

interface CellInput {
  sizeX?: number;
  sizeY?: number;
  color?: Color;
}

class Cell {
  sizeX: number;
  sizeY: number;
  color: Color;

  constructor(input?: CellInput) {
    Object.assign(this, input);
  }

  clone() {
    const clone = new Cell();
    Object.assign(clone, this);

    return clone;
  }
}

// I configured 2 cells
const cellA = new Cell({ sizeX: 10, sizeY: 10, color: "BLUE" });
const cellB = new Cell({ sizeX: 10, sizeY: 10, color: "RED" });

// User would like to make more cells A
const newCells: Cell[] = [];
for (let i = 0; i < 10; i++) {
  newCells.push(cellA.clone());
}
