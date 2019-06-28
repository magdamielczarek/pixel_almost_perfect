// po zakończonej grze powinien pojawić się modal z liczbą punktów i możliwością zapisania wyniku
// - inpupt na nazwę użytkownika, przyciski ZAPISZ NIE ZAPISUJ

// po zapisie wyników albo po anuluj jest powrót na stronę główną

import React from 'react';

const GameBoard = (props) => {
    return (
        <>
            <p>nowa gra</p>
            <div id="boardContainer">
                <canvas id="board"></canvas>
            </div>
            <h2 className="image__description"></h2>
        </>
    );
};

export default GameBoard;
