// po zakończonej grze powinien pojawić się modal z liczbą punktów i możliwością zapisania wyniku
// - inpupt na nazwę użytkownika, przyciski ZAPISZ NIE ZAPISUJ

// po zapisie wyników albo po anuluj jest powrót na stronę główną

import React from 'react';
import './GameBoard.scss';

const GameBoard = (props) => {
    return (
        <div className="boardContainer">
            <div id="canvasWrapper">
                <canvas id="board"></canvas>
            </div>
            <h2 className="imageDescription">opis obrazu</h2>
        </div>
    );
};

export default GameBoard;
