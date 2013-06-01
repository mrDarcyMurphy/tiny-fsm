var current = null

module.exports = function (states) {
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
        var states = Array.isArray(this.states) ? this.states : (!current ? Object.keys(this.states) : this.states[current])
        if (states.indexOf(state) >= 0) current = state
      }
    }
  })
}

