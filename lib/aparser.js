var inherits = require('util').inherits
var EventEmitter = require('events').EventEmitter

function Aparser() {
  EventEmitter.call(this);
}
inherits(Aparser, EventEmitter);

function emitArgument(argument, i) {
  this.options.arguments.push(argument);
  this.emit(argument, argument, i);
  this.emit('argument', argument, i); 
}

Aparser.prototype.parse = function(args) {
  this.options = {};
  var program_name = args[0];
  this.emit('program_name', program_name);
  this.options.program_name = program_name;
  this.options.arguments = []
  for(var i = 1; i < args.length; i++) {
    var argument = args[i];
    if(argument[0] == '-') {
      i++;
      var modifier = argument;
      argument = args[i];
      if(argument !== undefined && argument[0] != '-') {
        this.options[modifier.slice(1)] = argument;
        this.emit(modifier, argument, i);
      } else {
        i--;
        argument = modifier.slice(1)
        emitArgument.call(this, argument, i);
      }
    } else {
      emitArgument.call(this, argument, i);
    }
  }
  return this.options;
}

module.exports = new Aparser();
