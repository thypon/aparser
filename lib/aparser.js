var inherits = require('util').inherits
var EventEmitter = require('events').EventEmitter

function Aparser(args) {
  EventEmitter.call(this);
  for(var i = 0; i < args.length; i++) {
    var argument = args[i];
    if(arg[i] == '-') {
      i++;
      var modifier = argument;
      if(arg[i] != '-') {
        argument = args[i];
      } else {
        i--;
      }
      this.emit(modifier, argument, i);
    } else {
      this.emit(argument, argument, i);
      this.emit('argument', argument, i);
    }
  }
}

inherits(Aparser, EventEmitter);

var exports = Aparser;
