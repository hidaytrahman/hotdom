# hotdom

A lightweight library for DOM manipulation on modern browser using plain javascript.

## Install

**Requirements:**

- Node.js
- npm (Node.js package manager)

```
npm install hotdom --save
```

### usage

#### plug in your project

```javascript
import dom from 'hotdom'

let el = dom.selectById(id);

dom.addClass(el, "first-class")

```

## Usecases

### Selector

__selectByClass__

```javascript
const foo = dom.selectByClass('class-name');
```

__selectById()__

```javascript
const foo = dom.selectById('foo');
```


### classes

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

## Contributing
Create an [issue](https://github.com/hidaytrahman/domlite/issues/new) if you find a bug or have a suggestion or question.

If you want to develop this project:

- Fork it!
- Create your feature branch: git checkout -b my-new-feature
- Commit your changes: git commit -am 'Add some feature'
- Push to the branch: git push origin my-new-feature
- Submit a pull request
