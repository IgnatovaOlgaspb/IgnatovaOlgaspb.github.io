//todo: Из предыдущего задания (task6) сгенерируйте динамически шахматное поле из массива в HTML 
// и раставьте шахматы в соответсвующем порядке.

let board = [[],[],[],[],[],[],[],[]]

board[0][0] = '♜'
board[0][2] = '♝'
board[0][3] = '♚'
board[0][7] = '♜'
board[1][0] = '♟'
board[1][3] = '♟'
board[1][4] = '♗'
board[1][5] = '♟'
board[1][6] = '♘'
board[1][7] = '♟'
board[2][0] = '♞'
board[2][5] = '♞'
board[3][1] = '♟'
board[3][3] = '♘'
board[3][4] = '♙'
board[3][7] = '♙'
board[4][6] = '♙'
board[5][3] = '♙'
board[6][0] = '♙'
board[6][2] = '♙'
board[6][4] = '♔'
board[7][0] = '♛'
board[7][6] = '♝'

let str = ""
for (let subItem of board) {
    subItem.length = 8;
    str += "<div class='row'>"
    for (let item of subItem) {
        if (!item) {
            item = "&nbsp;"
            str += "<div class='col'>" + item + "</div>"
        }
        else {          
            str += "<div class='col'>" + item + "</div>"
        }
    }
    str += "</div>"  
}
let boardElement  = document.querySelector('.board')
boardElement.innerHTML = str
