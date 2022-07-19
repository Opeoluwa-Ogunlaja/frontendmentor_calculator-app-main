export const splitNum = (number) => {
    if (number.toLowerCase() === 'infinity') {
        return 'Infinity';
    }

    if (number.indexOf('.') === -1) {
        return splitNumber(number);
    }

    const num = number.split('.');
    return `${splitNumber(num[0])}.${num[1]}`;
}

export const splitNumber = (number) => {
    let num = number.toString();
    let numArray = [];
    const len = num.length;
    const params = {
        remainder: len % 3,
        div: len / 3
    }

    if (params.remainder === 0) {
        for (let i = 0; i < params.div; i++) {
            const str = num.substring(i * 3, (i * 3) + 3);
            numArray.push(str);
        }
    }
    else{
        let newNum = num;
        const prefix = num.substring(0, params.remainder);
        numArray.push(prefix);
        newNum = newNum.replace(prefix, '');
        for (let i = 0; i < params.div; i++) {
            const str = newNum.substring(i * 3, (i * 3) + 3);
            numArray.push(str);
        }
        numArray.pop();
    }
    
    num = numArray.join(',');
    return num;
}

export const counterSymbolsCheck = (prevValue, value) => {
    let val = prevValue;
    
    if (value === 'x') {
        if (prevValue[prevValue.length-1] !== '*') {
            val = (prevValue + '*')
        }

        if (prevValue[prevValue.length-1] === '/') {
            val = prevValue.substring(0, prevValue.length-1) + '*';
        }
    }
    else if(value === '/'){
        if (prevValue[prevValue.length-1] !== '/') {
            val = (prevValue + '/')
        }

        if (prevValue[prevValue.length-1] === '*') {
            val = prevValue.substring(0, prevValue.length-1) + '/';
        }
    }
    else if(value === '+'){
        if (prevValue[prevValue.length-1] !== '+') {
            val = (prevValue + '+')
        }

        if (prevValue[prevValue.length-1] === '*') {
            val = prevValue.substring(0, prevValue.length-1) + '*';
        }
    }
    else{
        val = prevValue + value
    }

    console.log(val);
    return val;
}