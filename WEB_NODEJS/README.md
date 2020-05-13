# Reverse word challenge

## Table of Contents

<!-- vscode-markdown-toc -->
- 0. [Problem](#Problem)
- 1. [Installation](#Installation)
- 2. [Tests](#Tests)
- 3. [Goals](#Goals)
- 4. [How to use](#HowToUse)

## 0. <a name='Problem'></a>Problem
Create a route on the node server that will accept any text string and return that text in the reverse order (ie Kenna would become anneK)

## 1. <a name='Installation'></a>Problem

It is necessary to install node js on your machine, after that just follow the code bellow.

```
  npm install
```

## 2. <a name='Tests'></a>Tests

The tests it was made using Mocha and Chai.js. To run the tests just use:

```
  npm test
```


## 3. <a name='Goals'></a>Goals

* Create a backend structure with route versioning.
* Centralize messages using i18n.
* Create testes for the controller.
* Create a helper to reverse words.
* Use eslint airbnb code style.

## 3. <a name='HowToUse'></a>How To Use

The backend uses as default the port 3001 and accepts requests from 3000. It has pretty much one end-point:

```
  /v1/reverse-words?word=Kenna
```

It must be used the query keyword "word" at route otherwise it will return an error 400.

This route it will return a reversed word send.