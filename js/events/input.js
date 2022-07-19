import { getBoard, setBoardValue } from "../utils/constants";
import { write, reset, clear, evaluate } from "./board";

export const _handleInput = (e) => {
    write(e.target.dataset.input)
}

export const _handleClear = (e) => {
    clear(e.target.dataset.input);
}

export const _handleReset = (e) => {
    reset()
}

export const _handleEval = (e) => {
    evaluate()
}