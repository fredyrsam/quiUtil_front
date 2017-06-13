# quipu-util-front [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Utils for Angular

## Description

This library contains Utils for AngulaJs

## Installation

we assume you have pre-installed [node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).

```bash
npm install -S quipu-util-front
```

## Quick Start

Import in your project:

```bash
var App = angular.module('App', [
    ...
    'QuipuUtilFront',
    ...
]);
```

You can also use

```bash
    'QuipuUtilFront.DirectivesModule'
    'QuipuUtilFront.FiltersModule'
    'QuipuUtilFront.ServicesModule'
```

Example usage:


```bash
class exampleController{

    construtor(dateQuipu){
        this.dateQuipu = dateQuipu;
    }
    
    $onInit(){
        let date = new Date("06/12/2017");
        let dateStr = this.dateQuipu.dateToString(date, '-');
        console.log(dataStr)// "12/06/2017
    }

}

```

## Services

#### dateQuipu
###### stringToDate
Convert String to Date

    stringToDate(dateStr, splitter='/')

* dateStr: date in string format.
* splitter(optional): Splitter in string input.

###### dateToString
Convert Date to String

    dateToString(date, splitter='/')

* date: date object.
* splitter(optional): Splitter in string output.

#### fileQuipu
###### base64ToArrayBuffer
Convert base64 to ArrayBuffer

    base64ToArrayBuffer(base64)

* base64: String base64.

###### downloadFromFileObj
Download From File Object

    downloadFromFileObj(file)

* file: File object.
```bash
    file = {
       filetype: 'application/pdf',
       filename: 'filename',
       base64: 'base64'
    }
```

#### inputQuipu
###### onlyNumbers
Valid only be number

    onlyNumbers(event)

* event: Angular event.

## License

MIT © [Fredy Romero Sam](https://github.com/fredyrsam) - [Quipucamayoc RRHH](http://quipucamayoc.unmsm.edu.pe/portal/)


[npm-image]: https://badge.fury.io/js/quipuUtil_front.svg
[npm-url]: https://npmjs.org/package/quipuUtil_front
[travis-image]: https://travis-ci.org/fredyrsam/quipuUtil_front.svg?branch=master
[travis-url]: https://travis-ci.org/fredyrsam/quipuUtil_front
[daviddm-image]: https://david-dm.org/fredyrsam/quipuUtil_front.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/fredyrsam/quipuUtil_front
[coveralls-image]: https://coveralls.io/repos/fredyrsam/quipuUtil_front/badge.svg
[coveralls-url]: https://coveralls.io/r/fredyrsam/quipuUtil_front
