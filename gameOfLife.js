class GameOfLife {
constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
}

/**
 * Returns a 2D Array
 */
  
makeBoard() {
      // TODO: Create and return an 2D Array 
      // with `this.heigh` as rows and `this.width` as cols.
      // For example, given a height of 4 and a width of 3, it will generate:
      // [
      //  [0, 0, 0],
      //  [0, 0, 0],
      //  [0, 0, 0],
      //  [0, 0, 0],
      // ]
    let board = []
    let widthCount = this.width
    let heightCount = this.height
    let row =[]
    while(widthCount >0){
        row.push(0)
        widthCount--
    }
    while(heightCount >0){
        let newRow = row.slice()
        board.push(newRow)
        heightCount--
    }
    return board
}

getCell(row,col){
    if(this.board[row] === undefined || this.board[row][col] === undefined){
        return 'dead'
    }
    return this.board[row][col]

}
// Need to fix how the if statement works

setCell(value,row,col){
    this.board[row][col] = value
}

toggleCell(row,col){
    let place = this.board[row][col]
    if(place === 0){
        this.board[row][col] = 1
        return 'alive'
    }
    if(place === 1){
        this.board[row][col] = 0
        return 'dead'
    }

}



    /**
     * Return the amount of living neighbors around a given coordinate.
     */
  
livingNeighbors(row, col) {
      // TODO: Return the count of living neighbors.
    let count = 0
    if(this.getCell(row+1,col)!== 'dead' && this.board[row +1][col] === 1){
        count++
    }

    if(this.getCell(row-1,col)!== 'dead' && this.board[row -1][col] === 1){
        count++
    }

    if(this.getCell(row,col+1)!== 'dead' && this.board[row][col+1] === 1){
        count++
    }

    if(this.getCell(row,col-1)!== 'dead' && this.board[row][col-1] === 1){
        count++
    }
    if(this.getCell(row+1,col+1)!== 'dead' && this.board[row +1][col+1] === 1){
        count++
    }

    if(this.getCell(row-1,col-1)!== 'dead' && this.board[row -1][col-1] === 1){
        count++
    }

    if(this.getCell(row-1,col+1)!== 'dead' && this.board[row-1][col+1] === 1){
        count++
    }

    if(this.getCell(row+1,col-1)!== 'dead' && this.board[row+1][col-1] === 1){
        count++
    }
    return count
}
  
  
    /**
     * Given the present board, apply the rules to generate a new board
     */
    
tick() {
    const newBoard = this.makeBoard();
      // TODO: Here is where you want to loop through all the cells
      // on the existing board and determine, based on it's neighbors,
      // whether the cell should be dead or alive in the new board 
      // (the next iteration of the game) 
      //
      // You need to:
      // 1. Count alive neighbors for all cells
      // 2. Set the next state of all cells in newBoard,
      // based on their current alive neighbors

    for(let i=0;i<this.board.length;i++){
        let currRow = this.board[i]
        console.log('hey')
        for(let j=0;j<currRow.length;j++){
            let currCell = currRow[j]
            let count = livingNeighbors(i, j)
            console.log('hello')
            if(currCell === 1 && count < 2){
                newBoard[i][j] = 0
            }
            if(currCell === 1 && count>3){
                newBoard[i][j] = 0
            }
            if(currCell === 0 && count === 3){
                newBoard[i][j] = 1
            }
        }
    }
    return newBoard
}
}