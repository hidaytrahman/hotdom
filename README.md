# 🔥 hotdom

A lightweight library for DOM manipulation on modern browser using plain javascript.

## Install

**Requirements:**

- Node.js
- npm (Node.js package manager)

```
npm install hotdom --save
```
OR

```
yarn add hotdom
```

### usage

#### plug in your project

```javascript
import dom from 'hotdom'

let el = dom.selectById(id);

dom.getAttributes(el)

```

## Usage

### Selector

__selectByClass__

```javascript
const foo = dom.selectByClass('class-name');
```



__addClass()__

Add class on element

Takes three arguments, element, class and optional callback 
`  addClass(el, cls, callback) `

```javascript
const heading = dom.selectById('heading');

// add class 
dom.addClass(heading, 'common-heading');
```

__findIn()__

Find in children elements

Takes three arguments, element, css selector (class, id, tag and so on)
`   findIn(el, selector)  `

```javascript
const main = dom.selectById('main');

// find child element
dom.findIn(main, '.sub-main');

```

### Utils

__loadScript()__

The `loadScript()` loads js file dynamically.

It returns promise.

Takes `path-of-file` as a argument and loads file dynamically.

Example:
```javascript
import { loadScript } from 'hotdom'

// replace path with your own
loadScript('https://code.jquery.com/ui/1.12.1/jquery-ui.min.js)
 .then(() => {

 }).catch(() => console.error('Something went wrong.'));

```

__getUrlParameter()__

The `getUrlParameter()` returns value of matched key.

Takes `key` as a argument and returns value of matched key

Example:
```javascript
import { getUrlParameter } from 'hotdom'

// https://foo.com/?name=hidy
const params = getUrlParameter('name'); // hidy

```

## Documentation

[Get started](https://github.com/hidaytrahman/hotdom/wiki)



## Contributing
Create an [issue](https://github.com/hidaytrahman/hotdom/issues/new) if you find a bug or have a suggestion or question.

If you want to develop this project:

- Fork it!
- Create your feature branch: git checkout -b my-new-feature
- Commit your changes: git commit -am 'Add some feature'
- Push to the branch: git push origin my-new-feature
- Submit a pull request
