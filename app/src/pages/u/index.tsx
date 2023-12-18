import './index.css'
import UserProfile from '@/components/userProfile'
import store from '@/provider/store'
import { User } from '@/types/user'
import { useEffect, useState } from 'react'

export default function UserPage() {
  const { user } = store.getState()
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    if (user?.user !== null) {
      setCurrentUser(user?.user)
    }
  }, [user.user])

  return (
    <div>
      <UserProfile user={currentUser} />
    </div>
  )
}
