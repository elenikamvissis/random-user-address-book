import React, { useState } from 'react'
import { User } from '../services/types'
import UserCard from '../components/UserCard'
import { sortUsers } from '../utils/sortUsers'

type UsersPageProps = {
  users: User[]
}

const UsersPage: React.FC<UsersPageProps> = ({ users }: UsersPageProps) => {
  const [searchInput, setSearchInput] = useState<string>('')
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [sortingOption, setSortingOption] = useState<string>('')

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setSearchInput: (searchInput: string) => void
  ) => {
    setSearchInput(event.target.value)
    if (searchInput !== '') {
      const filteredData = users.filter((user) => {
        return Object.values(user)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      })
      setFilteredUsers(filteredData)
    } else {
      setFilteredUsers(users)
    }
  }

  const handleSortChange = (option: string) => {
    setSortingOption(option)
    setFilteredUsers(sortUsers(users, option))
  }

  return (
    <div className='py-4'>
      <div className='flex flex-col md:flex-row justify-between py-2'>
        <input
          type='text'
          placeholder='Sök efter person'
          className='rounded-md w-full md:w-1/2 p-2 mb-2 border-gray-500 border'
          value={searchInput}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event, setSearchInput)
          }
        />
        <div className='py-3 px-2'>
          <select
            id='sortingOption'
            className='outline-none'
            value={sortingOption}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
              handleSortChange(event.target.value)
            }
          >
            <option value='firstNameAsc'>Förnamn - stigande</option>
            <option value='firstNameDesc'>Förnamn - fallande</option>
            <option value='lastNameAsc'>Efternamn - stigande</option>
            <option value='lastNameDesc'>Efternamn - fallande</option>
            <option value='locationAsc'>Land - stigande</option>
            <option value='locationDesc'>Land - fallande</option>
          </select>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
        {searchInput.length > 1
          ? filteredUsers.map((user, index) => {
              return <UserCard user={user} key={index} />
            })
          : users?.map((user: User, index: number) => {
              return <UserCard user={user} key={index} />
            })}
      </div>
      <div>
        {searchInput.length > 1 && filteredUsers.length === 0 && (
          <div>Inga användare hittades. Försök igen med annan sökterm.</div>
        )}
      </div>
    </div>
  )
}

export default UsersPage
