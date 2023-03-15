import React from 'react'
import { User } from '../services/types'
import { formatDate } from '../utils/formatDate'
import { CiMail } from 'react-icons/ci'
import { AiOutlinePhone } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import { BiFemaleSign, BiMaleSign } from 'react-icons/bi'

type UserDetailsProps = {
  user: User
}

const UserDetails: React.FC<UserDetailsProps> = ({
  user,
}: UserDetailsProps) => {
  return (
    <div>
      <div className='bg-pink-50 flex flex-col py-2 px-4 rounded-lg shadow-sm w-full sm:w-[320px] break-all'>
        {/** User details header */}
        <h2 className='font-bold text-xl'>
          {user.name.title + ' ' + user.name.first + ' ' + user.name.last}
        </h2>
        <h3 className='flex flex-row items-center '>
          {user.gender === 'female' ? <BiFemaleSign /> : <BiMaleSign />}
          {user.dob.age + ' år'}
        </h3>
        {/** User details image */}
        <figure className='flex items-center py-2'>
          <img
            alt={'User avatar of ' + user.name.first}
            src={user.picture.large}
          />
        </figure>
        <hr />
        <figcaption className='flex flex-col'>
          {/** User details contact information */}
          <div className='my-1'>
            <h2 className='font-bold'>Kontaktinformation</h2>
            <div className='flex flex-row items-center '>
              <CiMail className='mr-1' />
              <p>{user.email}</p>
            </div>
            <div className='flex flex-row items-center '>
              <AiOutlinePhone className='mr-1' />
              <p>{user.phone}</p>
            </div>
            <div className='flex flex-row items-center '>
              <BsPhone className='mr-1' />
              <p>{user.cell}</p>
            </div>
          </div>
          {/** User details address */}
          <div className='my-1'>
            <h2 className='font-bold'>Adress</h2>
            <p>
              {user.location.street.name + ' ' + user.location.street.number}
            </p>
            <p>{user.location.postcode + ' ' + user.location.city}</p>
            <p>{user.location.country}</p>
          </div>
          {/** User details other information */}
          <div className='my-1'>
            <h2 className='font-bold'>Övrigt</h2>
            <p>Nationalitet: {user.nat}</p>
            <p>Födelsedatum: {formatDate(user.dob.date)}</p>
            <p>Registreringsdatum: {formatDate(user.registered.date)}</p>
          </div>
        </figcaption>
      </div>
    </div>
  )
}

export default UserDetails
