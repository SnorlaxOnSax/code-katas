import { assert } from 'chai'
import windWhispers from './windWhispers.js'


describe('Wind whispers', () => {
    
    function doTest(s, expected) {
      it(`s = '${s}'`, () => {
        assert.strictEqual(windWhispers(s), expected)
      })
    }
    
    describe('Sample tests', () => {
       doTest('',          '')
       doTest('a',         'a a...')
       doTest('Hi',        'Hi i i...')
       doTest('Hello',     'Hello llo lo o o...')
       doTest('example',   'example mple le e e...')
       doTest('a ',        'a a...')
       doTest('Hi ',       'Hi i i...')
       doTest('Hello  ',   'Hello llo lo o o...')
       doTest('  Hello  ', 'Hello llo lo o o...')
       doTest('  i .',     'i . i...')
       doTest('  t !',     't ! t...')
    })
  })