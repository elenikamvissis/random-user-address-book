export interface UserResponse {
  results: User[] | null
  info: Info
}

export interface User {
  id: Id
  gender: string
  name: Name
  location: Location
  email: string
  login: Login
  dob: DateOfBirth
  registered: Registered
  phone: string
  cell: string
  picture: Picture
  nat: string
}

export interface Name {
  title: string
  first: string
  last: string
}
export interface Location {
  street: Street
  city: string
  state: string
  country: string
  postcode: number | string
  coordinates: Coordinates
  timezone: Timezone
}
export interface Street {
  number: number
  name: string
}
export interface Coordinates {
  latitude: string
  longitude: string
}
export interface Timezone {
  offset: string
  description: string
}
export interface Login {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}
export interface DateOfBirth {
  date: string
  age: number
}

export interface Registered {
  date: string
  age: number
}

export interface Id {
  name: string
  value?: string | null
}
export interface Picture {
  large: string
  medium: string
  thumbnail: string
}
export interface Info {
  seed: string
  results: number
  page: number
  version: string
}
