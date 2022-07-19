export const getScreen = () => document.getElementById('screen');

export const getBoard = () => document.getElementById('board')

export const getToggler = () => document.getElementById('toggler')

export const themes = 3;

export const setBoardValue = (_val) => {getBoard().value = _val; return}

export const getHTML = () => document.documentElement;