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
	];

	var currntX;
	var currntY;
}

// have a method someone can call on it to write
Board.prototype.write = function(x, y, symbol) {

	this.counter++;
	this.gameBoard[x][y] = symbol;
	this.checkNeighbor(x,y,symbol);
};

Board.prototype.checkForWin = function(x,y, symbol) {
	// if symbotcount == 3, you win
	if (x > -1 && y > -1 && x < this.gameBoard.length && y < this.gameBoard.length){
			if(this.gameBoard[x][y] === symbol){
				this.counter++;
				console.log('current streak counter : ' + this.counter);
				return true;
	}
			else{

				return false;
			}

		return false;

	}
	


};


Board.prototype.checkNeighbor = function(x, y, symbol){

		//check first neibu 
		 if (this.checkForWin(x,y+1, symbol) || this.checkForWin(x,y -1, symbol) || this.checkForWin(x ,y -2, symbol) || this.checkForWin(x - 1,y, symbol)){
			// if neib is a match, check if we're outside of the board and check if it is ===3
			// if (y < this.gameBoard.length && y > -1){
				// check if you won or not
				if(this.counter === 3){

					window.alert('you win, dude!');

				}

				else{
					 // return this.checkNeighbor(x, y +2, symbol);
					 console.log('check my other neighbor');
				}
		
		}
		else{
			console.log('neighbor is not a match');
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

board.checkState();

board.write(0,1,'x');
board.checkState();

board.write(0,2,'x')
board.checkState();




