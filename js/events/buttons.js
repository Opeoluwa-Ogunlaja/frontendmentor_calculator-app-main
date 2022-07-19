import { _handleClear, _handleEval, _handleInput, _handleReset } from "./input";

const input = () => {
    const _inputs = document.querySelectorAll('button[data-input]');
    _inputs.forEach(item => {
        item.addEventListener('click', _handleInput);
    })
}

const clear = () => {
    const _btn = document.querySelector('button[data-action=clear]');
    _btn.addEventListener('click', _handleClear)
}

const reset = () => {
    const _btn = document.querySelector('button[data-action=reset]');
    _btn.addEventListener('click', _handleReset)
}

const evaluate = () => {
    const _btn = document.querySelector('button[data-action=eval]');
    _btn.addEventListener('click', _handleEval)
}

const _buttonEvents = () => {
    input()
    clear()
    reset()
    evaluate()
}

export default _buttonEvents;