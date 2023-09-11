export const fizzbuzz = (num: number) => {
  if (Number.isNaN(num)) {
    throw new Error('Not a number')
  }

  const multiplies: Record<number, string> = { 3: 'fizz', 5: 'buzz' }
  let output = ''

  Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if (num % parseInt(multiplier) === 0) output += word
    })

  return output === '' ? num : output
}
