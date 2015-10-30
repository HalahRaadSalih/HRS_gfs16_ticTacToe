var Player = function(name){
	this.name = name;
}

var Symbol = function (shape){
	this.shape = shape.toLowerCase();
}

// The board
var Board = function(players) {

	// Keep track of it's own state
	this.counter = 0;
	this.players = players;
	this.gameBoard = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	]
}

// have a method someone can call on it to write
Board.prototype.write = function(x, y, symbol) {

	this.gameBoard[x][y] = symbol;
	// this.gameBoard.check(x,y,symbol);
};

Board.prototype.checkForWin = function(prevX,prevY, x,y, symbol) {
	// body...
	// if symbotcount == 3, you win
	if(this.gameBoard[prevX][prevY] === this.gameBoard[x][y]){
		this.counter++;
	}

	return this.counter === 3 ? true : false;

};


Board.prototype.check = function(x, y, symbol){
	if(x >= 0 && y >= 0){

		if(x === this.gameBoard.length && y === this.gameBoard.length ){
			//increase counter
	 		return checkForWin();
	 	}

	 	else{

	 	  	return 	this.check(x, y + 1, symbol) && 
	 	  			this.check(x, y - 1, symbol) && 
	 	  			this.check(x + 1, y, symbol) && 
	 	  			this.check(x - 1, y, symbol) && 
	 	  			this.check(x + 1, y + 1, symbol) && 
	 	  			this.check(x - 1 , y - 1, symbol);
	 	}
	}
	 
}

Board.prototype.checkState = function() {
	for(var i = 0; i< this.gameBoard.length; i++){
		console.log(this.gameBoard[i]);
	}
	
};
// board.checkNeighbor(1,1,"left")

// the players should
// call the board's method for making marks
// know whether or not they are x or o

var halah = new Player('Halah');
var cairo = new Player('Cairo');

var xSymbol = new Symbol('x');
var ySymbol = new Symbol('y');

var board = new Board([halah, cairo]);
console.log('intial state for board ');
board.checkState();

board.write(0,0,'x');

console.log(' state for board after write');
board.checkState();



