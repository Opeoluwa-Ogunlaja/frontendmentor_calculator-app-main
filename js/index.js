import events from "./events";
import toggle from "./events/toggle";
import { initStorage } from "./utils/localstorage";

window.onload = () => {
    initStorage();
    toggle()
    events()
}