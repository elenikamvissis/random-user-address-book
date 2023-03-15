import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { User } from '../services/types'
import UserDetails from '../components/UserDetails'
import { FaArrowLeft } from 'react-icons/fa'

type UserDetailsPageProps = {
  users: User[]
}

const UserDetailsPage: React.FC<UserDetailsPageProps> = ({
  users,
}: UserDetailsPageProps) => {
  const { id } = useParams<{ id: string }>()

  const user = users.find((u) => u.login.uuid === id)

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  if (!user) {
    return (
      <div>
        <button onClick={goBack}>
          <div className='flex flex-row items-center py-2'>
            <FaArrowLeft className='mr-1' />
            <p>Tillbaka</p>
          </div>
        </button>
        <p>Ett fel inträffade, användaren kunde inte hämtas.</p>
      </div>
    )
  }

  return (
    <div>
      <button onClick={goBack}>
        <div className='flex flex-row items-center py-2'>
          <FaArrowLeft className='mr-1' />
          <p>Tillbaka</p>
        </div>
      </button>
      <UserDetails user={user} />
    </div>
  )
}

export default UserDetailsPage
