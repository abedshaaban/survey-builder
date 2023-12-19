import './index.css'
import { useEffect, useState } from 'react'
import store from '@/provider/store'
import { User } from '@/types/user'
import { TextInput, Radio, CheckBox } from '@/components/form-content'

export default function CreatePage() {
  const { user } = store.getState()
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    if (user?.user !== null) {
      setCurrentUser(user?.user)
    }
  }, [user.user])

  return (
    <div className="layout">
      <TextInput />
      <Radio />
      <CheckBox
        title={'what is the animal that has a tale?'}
        choices={[
          { id: '1', label: 'bird' },
          { id: '2', label: 'fish' },
          { id: '3', label: 'food' },
          { id: '4', label: 'bear' }
        ]}
      />
    </div>
  )
}
