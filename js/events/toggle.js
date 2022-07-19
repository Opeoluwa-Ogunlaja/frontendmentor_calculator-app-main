import { getHTML, getToggler, themes } from "../utils/constants";
import { setThemeStore } from "../utils/localstorage";

const changeTheme = (x) => {
    var toggleWidth = getToggler().clientWidth;
    let regionsWidth = Math.floor(toggleWidth / themes)
    let region = Math.floor(x / regionsWidth) + 1;
    
    setThemeStore(region);
}

const handleTogglerClick = (e) => {
    const {scrollTop, scrollLeft} = getHTML();
    const {x, y} = e;
    const rect = getToggler().getBoundingClientRect();
    let xVal = x-rect.x-scrollLeft;
    return changeTheme(xVal);
}

const listen = () => {
    getToggler().addEventListener('pointerup', handleTogglerClick);
}

const toggleInit = () => {
    listen()
}

export default toggleInit;