import { describe, expect, it } from 'vitest'

import { fizzbuzz } from '../fizzbuzz.ts'

describe('Sample test', () => {
  it('should throw a specific error message if not number is provided as parameter', (): void => {
    expect((): void => { fizzbuzz(NaN) }).toThrow(/number/)
  })

  it('should not throw an error if a number is provided as parameter', (): void => {
    expect((): void => { fizzbuzz(1) }).not.toThrow()
  })

  it('should return 1 if 1 is provided as parameter', (): void => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if 2 is provided as parameter', (): void => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  it('shuld return 4 if 4 is provided as parameter', (): void => {
    expect(fizzbuzz(4)).toBe(4)
  })

  it('should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })

  it('should return "fizzbuzz" if number provided is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
  })
})
