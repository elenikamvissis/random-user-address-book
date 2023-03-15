import { User } from '../services/types'

export const sortUsers = (users: User[], sortingOption: string): User[] => {
  switch (sortingOption) {
    case 'firstNameAsc':
      return users.sort((a, b) => a.name.first.localeCompare(b.name.first))
    case 'firstNameDesc':
      return users.sort((a, b) => b.name.first.localeCompare(a.name.first))
    case 'lastNameAsc':
      return users.sort((a, b) => a.name.last.localeCompare(b.name.last))
    case 'lastNameDesc':
      return users.sort((a, b) => b.name.last.localeCompare(a.name.last))
    case 'locationAsc':
      return users.sort((a, b) =>
        a.location.country.localeCompare(b.location.country)
      )
    case 'locationDesc':
      return users.sort((a, b) =>
        b.location.country.localeCompare(a.location.country)
      )
    default:
      return users
  }
}
