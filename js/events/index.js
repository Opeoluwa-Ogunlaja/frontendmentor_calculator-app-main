import boardEvents from "./board";
import buttonEvents from "./buttons";
import storageEvents from "./storage";

const eventsInit = () => {
    storageEvents();
    buttonEvents();
    boardEvents()
}

export default eventsInit;