/**
 * - Прості типи: any, number, string, boolean, null, undefined
 * - Виведення типів (type inference)
 */

// let userName = undefined

// console.log('userName', userName)

interface User {
  name: string
  age: number
  isOnline: boolean
}

const user: User = {
  name: 'Alex',
  age: 42,
  isOnline: true,
}
const user2: User = {
  name: 'Alex',
  age: 42,
  isOnline: true,
}

console.log(user, user2)
