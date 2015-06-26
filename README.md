# nachos-home 

Get the path to the nachos home directory

<table>
  <thead>
    <tr>
      <th>Linux</th>
      <th>OSX</th>
      <th>Windows</th>
      <th>Coverage</th>
      <th>Dependencies</th>
      <th>DevDependencies</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" align="center">
        <a href="https://travis-ci.org/nachos/nachos-home"><img src="https://img.shields.io/travis/nachos/nachos-home.svg?style=flat-square"></a>
      </td>
      <td align="center">
        <a href="https://ci.appveyor.com/project/noamokman/nachos-home"><img src="https://img.shields.io/appveyor/ci/noamokman/nachos-home.svg?style=flat-square"></a>
      </td>
      <td align="center">
<a href='https://coveralls.io/r/nachos/nachos-home'><img src='https://img.shields.io/coveralls/nachos/nachos-home.svg?style=flat-square' alt='Coverage Status' /></a>
      </td>
      <td align="center">
        <a href="https://david-dm.org/nachos/nachos-home"><img src="https://img.shields.io/david/nachos/nachos-home.svg?style=flat-square"></a>
      </td>
      <td align="center">
        <a href="https://david-dm.org/nachos/nachos-home#info=devDependencies"><img src="https://img.shields.io/david/dev/nachos/nachos-home.svg?style=flat-square"/></a>
      </td>
    </tr>
  </tbody>
</table>

## Have a problem? Come chat with us!
[![Join the chat at https://gitter.im/nachos/nachos-home](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nachos/nachos-home?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Installation
``` bash
  $ [sudo] npm install nachos-home -g
```

**Note:** If you are using nachos home _programmatically_

``` bash
  $ cd /path/to/your/project
  $ [sudo] npm install nachos-home --save
```

## Examples
### From a command line
Print nachos home folder
``` bash
  $ nachos-home print
  /user/home/.nachos
```

Supports inner path parameter
``` bash
  $ nachos-home print foo/bar
  /user/home/.nachos/foo/bar
```

### From code
Getting nachos home folder
``` js
var nachosHome = require('nachos-home');

console.log(nachosHome()); // -> /user/home/.nachos
console.log(nachosHome('foo')); // -> /user/home/.nachos/foo
console.log(nachosHome('foo', 'bar')); // -> /user/home/.nachos/foo/bar
console.log(nachosHome(['foo', ['bar', ...]])); // -> /user/home/.nachos/foo/bar/...
```

## Run Tests
``` bash
  $ npm test
```

## License

[MIT](LICENSE)
