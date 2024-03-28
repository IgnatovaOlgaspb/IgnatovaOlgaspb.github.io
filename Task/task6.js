// todo: Сохраните результат шахматной партии в виде двухмерного массива board, называть фигуры можно 
// произвольно, например “black queen”.

let board = [[],[],[],[],[],[],[],[]]

board[0][0] = 'black chess rook'
board[0][2] = 'black chess bishop'
board[0][3] = 'black chess king'
board[0][7] = 'black chess rook'
board[1][0] = 'black chess pawn'
board[1][3] = 'black chess pawn'
board[1][4] = 'white chess bishop'
board[1][5] = 'black chess pawn'
board[1][6] = 'white chess knight'
board[1][7] = 'black chess pawn'
board[2][0] = 'black chess knight'
board[2][5] = 'black chess knight'
board[3][1] = 'black chess pawn'
board[3][3] = 'white chess knight'
board[3][4] = 'white chess pawn'
board[3][7] = 'white chess pawn'
board[4][6] = 'white chess pawn'
board[5][3] = 'white chess pawn'
board[6][0] = 'white chess pawn'
board[6][2] = 'white chess pawn'
board[6][4] = 'white chess king'
board[7][0] = 'black chess queen'
board[7][6] = 'black chess bishop'

console.log(board)

