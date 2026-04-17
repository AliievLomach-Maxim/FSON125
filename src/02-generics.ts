// /**
//  * Узагальнені типи (generics)
//  */

// /* ---------- 1. Базова generic-функція ---------- */
// // function identity<T>(value: T) {
// //   console.log(value)
// //   return value
// // }

// // const n = identity<number>(42)
// // const s = identity('hello')
// // console.log(n, s)

// /* ---------- 2. Generics з масивами ---------- */
// function firstElement<T>(arr: T[]): T {
//   return arr[0]
// }
// // number[] > T
// const firstNum = firstElement<number>([10, 20, 30])
// const firstStr = firstElement<string>(['Alice', 'Bob'])
// console.log(firstNum, firstStr)

// /* ---------- 3. Дженерик інтерфейс: узагальнений тип API відповіді ---------- */

// // GET api/notes
// // interface Note {
// //   noteName: string
// //   description: string
// // }
// // interface HTTPResponse<T>{
// //   data:T[],
// //   code: number
// //   message: string
// // }
// // // interface NoteResponse {
// // //   data: Note[]
// // //   code: number
// // //   message: string
// // // }
// // // {
// // // data:notes,
// // // code:number,
// // // message:string
// // // }
// // // GET api/user
// // interface User {
// //   name: string
// //   age: number
// // }
// // const users:HTTPResponse<User> = await fetch()
// // const notes:HTTPResponse<Note> = await fetch()

// // interface UserResponse {
// //   data: User[]
// //   code: number
// //   message: string
// // }
// // {
// // data:user,
// // code:number,
// // message:string
// // }
// // GET api/post
// // {
// // data:post,
// // code:number,
// // message:string
// // }

// interface ApiResponse<T> {
//   data: T
//   status: number
// }

// interface Todo {
//   id: number
//   title: string
// }
// // interface TodoApiResponse {
// //   data: Todo[]
// //   status: number
// // }

// const getTodosResponse: ApiResponse<Todo[]> = {
//   data: [{ id: 1, title: 'Learn generics' }],
//   status: 200,
// }
// console.log(getTodosResponse.data[0].title)

// interface User {
//   id: string
//   username: string
//   score: number
// }
// // interface UserApiResponse {
// //   data: User[]
// //   status: number
// // }
// const createUserResponse: ApiResponse<User> = {
//   data: { id: 'some-id', username: 'Jacob', score: 50 },
//   status: 201,
// }
// console.log(createUserResponse.data.username)

// ===================

// function getMaxValue<T>(arr: T[], clb: (p: T) => number) {
//   return arr.reduce((acc, value) => {
//     return clb(value) > acc ? acc : clb(value)
//   }, 0)
// }
// interface User {
//   name: string
//   age: number
// }
// const users: User[] = [
//   { name: 'Alex', age: 42 },
//   { name: 'Bob', age: 24 },
// ]

// const oldestUser = getMaxValue<User>(users, (u) => u.age)

// interface Product {
//   productName: string
//   price: number
// }
// const products: Product[] = [
//   { productName: 'iPhone', price: 420 },
//   { productName: 'Xiaomi', price: 4000 },
// ]

// const maxPrice = getMaxValue<Product>(products, (p) => p.price)
