import React from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../services/types'
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa'

type UserCardProps = {
  user: User
}

const UserCard: React.FC<UserCardProps> = ({ user }: UserCardProps) => {
  const { picture, name, location, login } = user

  const navigate = useNavigate()
  const uuid = login.uuid

  return (
    <div
      className='bg-pink-50 flex flex-row p-4 rounded-lg shadow-sm hover:bg-pink-100 hover:border-pink-200 hover:border'
      onClick={() => navigate(`userdetails/${uuid}`)}
    >
      <figure className='flex items-center shrink-0'>
        <img
          className='rounded-full'
          alt={'User avatar of ' + user.name.first}
          src={picture.medium}
        />
      </figure>
      <figcaption className='flex flex-col grow pl-4'>
        <h1 className='text-base font-bold'>{name.first + ' ' + name.last}</h1>
        <div className='flex flex-row items-center '>
          <FaMapMarkerAlt className='mr-1' />
          <h2> {location.country}</h2>
        </div>
      </figcaption>
      <div className='flex flex-col justify-end items-end '>
        <FaArrowRight />
      </div>
    </div>
  )
}

export default UserCard
