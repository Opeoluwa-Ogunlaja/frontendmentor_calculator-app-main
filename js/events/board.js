import { calculate, parseCalculationString } from "../utils/calc";
import { getBoard, setBoardValue } from "../utils/constants"
import format from "../utils/format"
import { counterSymbolsCheck, splitNum } from "../utils/utils";

export const write = (val) => {
    const prevValue = getBoard().value;

    setBoardValue(counterSymbolsCheck(prevValue, val));

    format(getBoard().value);
}

export const clear = () => {
    const prevValue = getBoard().value;
    if (prevValue.toLowerCase() === 'infinity') {
        reset()
        return;
    }

    setBoardValue(prevValue.substring(0, prevValue.length-1))
    format(getBoard().value);
}

export const reset = () => {
    setBoardValue('')
    format('');
}

export const evaluate = () => {
    const boardVal = getBoard().value;
    if (boardVal === '') {
        return;
    }
    try {
        const result = (calculate(parseCalculationString(boardVal))).toString();
        setBoardValue(result);
        format(splitNum(result));
    } catch (e) {
        console.error(e);
        setBoardValue('');
        format('Error')
    }
}

const boardEvents = () => {
}

export default boardEvents;