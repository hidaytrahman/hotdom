const DOM = {

    /*------ SELECTORS ------ */
    selectById: (id) => {
        return document.getElementById(id);
    },

    selectByClass: (cls) => {
        return document.querySelector(`.${cls}`);
    },

    select: (selector) => {
        return document.querySelector(selector);
    },


    /*------ CSS CLASSES ------ */
    addClass: (el, cls, callback) => {
        el.classList.add(cls);
        if (callback) callback();
    },

    removeClass: (el, cls) => {
        el.classList.remove(cls);
    },

    toggleClass: (el, cls) => {
        el.classList.toggle(cls);
    },

    hasClass(el, cls) {
        return el.classList.contains(cls);
    },

    findIn(el, selector) {
        return el.querySelector(`${selector}`);
    },

    /*------ TRAVERSING ------ */
    parent(el) {
        if (el) {
            return el.parentElement;
        }
    },

    firstChild: (el) => {
        if (el) {
            return el.firstElementChild;
        }
    },

    prev: (el) => {
        if (el) {
            return el.previousElementSibling;
        }
    },

    next: (el) => {
        if (el) {
            return el.nextElementSibling;
        }
    },

    // Getters

    // get all attributes
    getAttributes: (el) => {
        if (!el) {
            return
        }

        const attrs = el.attributes;
        const _attrList = [];
        for (let i = 0; i < attrs.length; i++) {
            console.log(attrs[i].nodeName);
            _attrList.push({
                attr: attrs[i].nodeName,
                value: attrs[i].nodeValue
            })
        }

        return _attrList;
    }
}

export default DOM;