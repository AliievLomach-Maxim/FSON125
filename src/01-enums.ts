/**
 * Перелічення (enum) - це список іменованих констант, які можна використовувати як значення, а не тип.
 *
 * - Union type (наприклад: "pending" | "fulfilled") - легший і часто кращий вибір,
 *   якщо вам потрібен тільки набір допустимих типів.
 * - Enum створює реальний об'єкт в рантаймі (корисно для значень, які
 *   потрібно перевіряти або передавати як значення в коді).
 *
 * Правило: якщо не потрібен runtime-об'єкт - візьміть union type.
 */

// type Status = 'pending'|'rejected'
// enum Status {
//   pending = 'pending',
//   REJECTED = 'rejected',
// }

// let status: Status = Status.pending
// status = Status.REJECTED
// console.log(status)

/* ---------- 1. Union type vs Enum (строкові значення) ---------- */
// Рекомендується починати з union type:
// type StatusUnion = 'pending' | 'fulfilled' | 'rejected'

// // Якщо потрібен runtime-об'єкт (наприклад для перебору або передачі в коді):
// enum StatusEnum {
//   Pending = 'pending',
//   Fulfilled = 'fulfilled',
//   Rejected = 'rejected',
// }

// // Використання union type (тип лише для перевірки компілятором):
// let s1: StatusUnion = 'pending'
// // s1 = "unknown"; // помилка: невалідне значення

// // Використання enum (є значення в runtime):
// let s2: StatusEnum = StatusEnum.Pending
// // console.log(StatusEnum.Pending) // => "pending"

/* ---------- 2. Numeric enums ---------- */
// type HTTPCode =200|400
// enum HTTPCode {
//   Success = 200,
//   Created = 201,
//   BadRequest = 400,
//   ServerError = 500,
// }

// const code: HTTPCode = 200
// if (code === 400) {
// }

/* ---------- 3. String enums (стабільні і зрозумілі) ---------- */
type UserRole = 'admin' | 'user' | 'guest'

enum Role {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
}

interface User {
  username: string
  // role: Role // використовуємо enum як тип і як значення
  role: UserRole // використовуємо enum як тип і як значення
}

const user: User = {
  username: 'jacob',
  // role: Role.Guest,
  role: 'admin',
}
