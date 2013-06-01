var TwitchFSM = function (a, b) {
  this.states = b
  if (a) this.state = a
  return this
}

TwitchFSM.prototype = Object.defineProperties(TwitchFSM.prototype, {
  currentState: {
    enumerable: false,
    configurable: false,
    writable: true,
    value: null
  },
  state: {
    enumerable: true,
    configurable: false,
    get: function() {
      return this.currentState
    },
    set: function(state) {
      if (this.states.indexOf(state) >= 0) this.currentState = state
    }
  },
  transition: {
    enumerable: true,
    value: function(target) {
      this.state = target
    }
  }
})
