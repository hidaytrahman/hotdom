// detect IE
export const isIE = () => {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE '); // IE 10 or older
    var trident = ua.indexOf('Trident/'); //IE 11
    return (msie > 0 || trident > 0);
}

// get local storage
export const getLocalStorage = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
}

// get session storage
export const getSessionStorage = (key) => {
    return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : null;
}

// get all local storage
export const getAllLocalStorage = () => {

    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        archive.push( key + '=' + localStorage.getItem(key));
    }

    return archive;
}


// get lang
export const getLang = () => {
    var lang = navigator.language;
    return lang;
}

export const currentLanguage = navigator.language;
