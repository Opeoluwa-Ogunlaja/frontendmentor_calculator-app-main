
if(value === '/'){
    if (prevValue[prevValue.length-1] === '*') {
        val = prevValue.substring(0, prevValue.length-1) + '/';
    }
    else{
        val = (prevValue + '/')
    }
}
else if(value === '+'){
    if (prevValue[prevValue.length-1] === '-') {
        val = prevValue.substring(0, prevValue.length-1) + '+';
    }
    else{
        val = (prevValue + '+')
    }
}
else if(value === '-'){
    if (prevValue[prevValue.length-1] === '+') {
        val = prevValue.substring(0, prevValue.length-1) + '-';
    }
    else{
        val = (prevValue + '-')
    }
}