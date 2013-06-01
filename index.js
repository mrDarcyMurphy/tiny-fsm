var current = null

module.exports = function (states) {
  Object.defineProperties(this, {
    states: {
      enumerable: true,
      value: Array.isArray(states) ? states : []
    },
    state: {
      enumerable: true,
      get: function() {
        return current
      },
      set: function(state) {
        if (this.states.indexOf(state) >= 0) current = state
      }
    }
  })
}
