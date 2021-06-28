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
    },

    // Visibility

    hide: (el) => {
        if (el) {
            el.style.display = 'none';
        }
    },

    show: (el, visibilityType = 'block') => {
        if (el) {
            if (visibilityType === "block") {
                el.style.cssText += ';display:block !important;';
            } else if (visibilityType === "inline") {
                el.style.cssText += ';display:inline !important;';
            } else {
                el.style.cssText += ';display:flex !important;';
            }
        }

        // todo add param to choose whether block or flex
    },

    toggle: (el, visibilityType = 'display') => {

        if (el && visibilityType === 'display') {
            if (x.style.display === "none") {
                x.style.display = "block !important";
            } else {
                x.style.display = "none !important";
            }
        }

        if (el && visibilityType === 'visibility') {
            if (x.style.visibility === "hidden") {
                x.style.display = "visible !important";
            } else {
                x.style.display = "hidden !important";
            }
        }
    }

}

export default DOM;