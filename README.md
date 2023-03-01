## @labdigital/akeneo-node-sdk@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [Fetch
API](https://fetch.spec.whatwg.org/). The generated Node module can be used in the
following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should
be automatically resolved via `package.json`.
([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:
```
make fetch
make generate
```

__Note__ that there are currently some typos/bugs in the OpenAPI documentation. Replace
all occurrences of the following after generating and before publishing.

- "Content-type" with "Content-Type" 
- `"properties": { "_embedded": {` with `"type": "object", "properties": { "_embedded":
  {`

### Publishing

First build the package then run ```npm publish```

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @labdigital/akeneo-node-sdk@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
