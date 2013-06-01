var assert = require('assert')
var FSM = require('../index.js')

describe('FMS', function(){
  describe('init', function(){
    it('sets passed in states', function(){
      var fsm = new FSM(['foo', 'bar'])
      assert.deepEqual(fsm.states, ['foo', 'bar'])
    })
  })
  describe('state#set', function(){
    it("doesn't set to non-allowed states", function(){
      var fsm = new FSM(['foo', 'bar'])
      fsm.state = 'nope'
      assert.equal(fsm.state, null)
    })
    it("sets allowed states", function(){
      var fsm = new FSM(['foo', 'bar'])
      fsm.state = 'foo'
      assert.equal(fsm.state, 'foo')
    })
  })
})
