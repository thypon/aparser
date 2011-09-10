var inherits = require('util').inherits
var EventEmitter = require('events').EventEmitter

function Aparser() {
  EventEmitter.call(this);
}
inherits(Aparser, EventEmitter);

Aparser.prototype.parse = function(args) {
  this.emit('program_name', args[0]);
  for(var i = 1; i < args.length; i++) {
    var argument = args[i];
    if(argument[0] == '-') {
      i++;
      var modifier = argument;
      argument = args[i];
      if(argument !== undefined && argument[0] != '-') {
        this.emit(modifier, argument, i);
      } else {
        this.emit(modifier, modifier, i);
        i--;
      }
    } else {
      this.emit(argument, argument, i);
      this.emit('argument', argument, i);
    }
  }
}

module.exports = new Aparser();
