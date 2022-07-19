import { getScreen } from "./constants";

const replaceAsterisk = (val) => val.replaceAll('*', 'x')

const format  = (val) => {

    let cacheVal = replaceAsterisk(val);
    
    let newVal = cacheVal;
    getScreen().value = newVal;
}

export default format;