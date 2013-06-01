var assert = require('assert')
var FSM = require('../index.js')
var objs = {
  foo: ['bar', 'baz', 'fizz', 'buzz'],
  bar: ['foo', 'baz'],
  baz: ['foo', 'bar'],
  fizz: ['buzz'],
  buzz: ['fizz']
}

describe('FMS', function(){
  describe('init', function(){
    it('sets passed in states', function(){
      var fsm = new FSM(['foo', 'bar'])
      assert.deepEqual(fsm.states, ['foo', 'bar'])
    })
  })
  describe('array based states definition', function(){
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
  describe('object based states definition', function(){
    describe('state#set', function(){
      it("doesn't set to non-allowed states", function(){
        var fsm = new FSM(objs)
        fsm.state = 'nope'
        assert.equal(fsm.state, null)
      })
      it("sets allowed states", function(){
        var fsm = new FSM(objs)
        fsm.state = 'foo'
        assert.equal(fsm.state, 'foo')
        fsm.state = 'fizz'
        assert.equal(fsm.state, 'fizz')
      })
    })
  })
})
