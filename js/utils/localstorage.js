import { setTheme } from "./classHelpers";

const originalSetItem = localStorage.setItem;

localStorage.setItem = function(key, value) {
  var event = new Event('itemInserted');

  event.value = value; // Optional..
  event.key = key; // Optional..

  document.dispatchEvent(event);

  originalSetItem.apply(this, arguments);
};


export const initStorage = () => {
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = localStorage.getItem("theme");
    if (!dark) {
        if (theme === null) {
            setThemeStore(1)
            setTheme(theme);
            return;
        }
        setTheme(theme);
        return;
    }
    else{
        setThemeStore(3)
        setTheme(theme);
        return;
    }
}

export const setThemeStore = (val) => {
    localStorage.setItem('theme', val);
}

