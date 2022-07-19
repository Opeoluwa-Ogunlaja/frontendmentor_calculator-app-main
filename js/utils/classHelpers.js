import { getHTML, themes } from "./constants";

const removeThemes = () => {
    for (let i = 1; i <= themes; i++) {
        getHTML().classList.remove(`theme${i}`);        
    }
}

export const setTheme = (theme) => {
    removeThemes();
    if (theme > themes) {
        getHTML().classList.add('theme1');
        return;
    }
    getHTML().classList.add(`theme${theme}`);
}