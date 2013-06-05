var EventEmitter = require('events').EventEmitter
var current = null

var FSM = function (states) {
  current = null
  Object.defineProperties(this, {
    states: {
      enumerable: true,
      value: states ? states : {}
    },
    state: {
      enumerable: true,
      get: function() {
        return current
      },
      set: function(state) {
        var states
        if (Array.isArray(this.states)) states = this.states
        else if (!current)              states = Object.keys(this.states)
        else                            states = this.states[current]
        if (states.indexOf(state) >= 0) {
          if (current) this.emit('exit', current)
          current = state
          this.emit('enter', current)
        }
      }
    }
  })
  this.on('goto', function(state){
    this.state = state
  }, this)
}

FSM.prototype = Object.create(EventEmitter.prototype)

module.exports = FSM
