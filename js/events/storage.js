import { setTheme } from "../utils/classHelpers";

const storageEvents = () => {
    document.addEventListener("itemInserted", (e) => {
        setTheme(e.value);
    }, false);
}

export default storageEvents;