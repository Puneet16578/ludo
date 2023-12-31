import { COORDINATES_MAP, PLAYERS, STEP_LENGTH } from './back.js';
const diceButtonElement = document.querySelector('#dice-btn');
const playerPiecesElements = {
    P1: document.querySelectorAll('[player-id="P1"].player-piece'),
    P2: document.querySelectorAll('[player-id="P2"].player-piece'),
}


export class UI {
    static listenDiceClick(callback){
        diceButtonElement.addEventListener('click',callback);
    }
    static listenResetClick(callback){
        document.querySelector('button#reset-btn').addEventListener('click',callback);
    }
    static listenPieceClick(){
        document.querySelector('.player-pieces').addEventListener('click',callback);
    }
    /** 
     * @param {string} player 
     * @param {Number} piece 
     * @param {Number} newPosition 
    */
    setPiecePosition(player,piece,newPosition) {
        if(!playerPiecesElements[player] || !playerPiecesElements[player][piece]) {
            console.error(`Player element of given player: ${player} and piece: ${piece} not found`)
            return;
        }
        const [x, y] = COORDINATES_MAP[newPosition];

        const pieceElement = playerPiecesElements[player][piece];
        pieceElement.style.top = y * STEP_LENGTH + '%';
        pieceElement.style.left = x * STEP_LENGTH + '%';
    }
}