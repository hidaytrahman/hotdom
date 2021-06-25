const DOM = {

    /*------ SELECTORS ------ */
    selectById: (id) => {
        return document.getElementById(id);
    },

    selectByClass: (cls) => {
        return document.querySelector(`.${cls}`);
    },


     /*------ CSS CLASSES ------ */
    addClass: (el, cls, callback) => {
        el.classList.add(cls);
        if (callback) callback();
    },

    removeClass: (el, cls) => {
        el.classList.remove(cls);
    },

    hasClass(el, cls) {
        return el.classList.contains(cls);
    },

    findIn(el, selector) {
        return el.querySelector(`${selector}`);
    },

    /*------ TRAVERSING ------ */
    parent(el) {
        return el.parentElement;
    }

}

export default DOM;