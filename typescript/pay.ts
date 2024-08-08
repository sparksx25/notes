type User = {
  name: string,
  age: number
}

type Filter<T> = {
  [K in keyof T as T[K] extends string ? K : never]: string
}

type FilteredUser = Filter<User> // { name: string }

const STATUS = {
  SUCCESS: 1,
  FAIL: 2
} as const;

type ConstValue<T> = T[keyof T]

type Values = ConstValue<typeof STATUS>