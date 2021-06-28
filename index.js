import hotdom from "./lib/hotdom.js";
import { convertArrToObj, getUrlParameter, loadScript } from "./lib/utils.js";
import { getLocalStorage, isIE, getAllLocalStorage, getLang, currentLanguage } from "./lib/browser";

export {
    // utils
    convertArrToObj,
    getUrlParameter,
    loadScript,

    // Browser utils
    getLocalStorage,
    getAllLocalStorage,
    isIE,
    getLang,
    currentLanguage
};

export default hotdom;