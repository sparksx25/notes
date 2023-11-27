type User = {
  name: string,
  age: number
}

type Filter<T> = {
  [K in keyof T as T[K] extends string ? K : never]: string
}

type FilteredUser = Filter<User> // { name: string }