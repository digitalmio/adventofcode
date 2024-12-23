// At the Magic Cookie Factory, cookies are baked in factorial quantities.
// A cookie is "perfectly round" if its size ends with a zero. Write a function to determine
// how many perfectly round cookies will be made when baking with n! ingredients.

const countPerfectlyRoundCookies = (n: number): number => {
  // calculate factorial by multiplying all numbers from 1 to n
  // BigInt is needed for 100 factorial (JS Number cannot handle such big numbers)
  const calculateFactorial = (n: number) => {
    let result = 1n;
    for (let i = 2n; i <= BigInt(n); i++) result *= i;
    return result.toString()
  }

  // find all trailing zeros and count length
  // if not found - return zero
  return calculateFactorial(n).match(/0+$/)?.[0].length ?? 0
}

// tests
console.log(countPerfectlyRoundCookies(5)) // expect 1
console.log(countPerfectlyRoundCookies(10)) // expect 2
console.log(countPerfectlyRoundCookies(100)) // expect 24