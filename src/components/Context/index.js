import React from 'react';

const GameContext = React.createContext();
export default GameContext;
export const Provider = GameContext.Provider;
export const Consumer = GameContext.Consumer;
