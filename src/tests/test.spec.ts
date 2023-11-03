const add = (a: number, b: number) => a + b
const generateGreeting = (name: string = 'Anonymous') => `Hello ${name}!`

describe('add', () => {
  test('should add two numbers', () => {
    expect(add(2, 2)).toBe(4)
  })

  test('should generate greeting from name', () => {
    expect(generateGreeting('Lincoln')).toBe('Hello Lincoln!')
  })

  test('should generate greeting for no name', () => {
    expect(generateGreeting()).toBe('Hello Anonymous!')
  })
})
