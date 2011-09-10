# Aparser

An async ARGV parser

## Installation

``` bash
  $ [sudo] npm install aparser -g
```
## Usage

```javascript
var aparser = require('aparser');
var puts = require('sys').puts

/* aparser object it's an instance of EventEmitter */

/* example with modifier, 
   if the string after -g it's another modifier the -g itself it's returned
*/
aparser.on('-g', function(arg, index) {
  puts('the string with -g modifier is '+arg);  
});

/* example with a command */
aparser.on('start', function(arg, index) {
  puts('script '+arg+'ed');
});

/* example with a simple argument 
   'argument' event it's a command catch-all
*/
aparser.on('argument', function(arg, index) {
  puts('the '+index+' argument is'+ arg);
});

aparser.parser(process.argv);
```

then executing it

``` bash
  $ node -g ciao start
  the string with -g modifier is ciao
  script started
  the 3 argument is start
```
#### Author: [Andrea Brancaleoni][0]

[0]: http://goblog.heroku.com

