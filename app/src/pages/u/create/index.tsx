import './index.css'
import { useEffect, useState } from 'react'
import store from '@/provider/store'
import { User } from '@/types/user'
import { TextInput, Radio, CheckBox } from '@/components/form-content'
import Button from '@/components/button'

export default function CreatePage() {
  const { user } = store.getState()
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    if (user?.user !== null) {
      setCurrentUser(user?.user)
    }
  }, [user.user])

  type InsertQProps = { questionNode: string }

  function insertQuestion({ questionNode }: InsertQProps) {
    console.log(questionNode)
  }

  return (
    <div className="layout">
      <div className="survey-btns">
        <Button
          onClick={() => {
            insertQuestion({ questionNode: 'TextInput' })
          }}
          type="secondary"
        >
          Add Input
        </Button>

        <Button
          onClick={() => {
            insertQuestion({ questionNode: 'CheckBox' })
          }}
          type="secondary"
        >
          Add Check Box
        </Button>

        <Button
          onClick={() => {
            insertQuestion({ questionNode: 'Radio' })
          }}
          type="secondary"
        >
          Add Radio
        </Button>
      </div>

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
