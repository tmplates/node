const hello = require('../src')

describe('Hello cases', () => {
  test('must be return the string value', () => {
    expect(hello('World!')).toBe('Hello World!')
  })
})
