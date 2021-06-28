// convert array to object
export const convertArrToObj = (arrayData) => {
    const objectParams = {};
    arrayData.forEach((item, index) => {
        // assign item to an object - by key and value
        Object.assign(objectParams, { [item.key]: item.value })
    });

    return objectParams;
}

// get url params
export const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// load script dynamically
export const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.onload = resolve
        script.onerror = reject
        script.src = src
        document.head.append(script)
    });
}
