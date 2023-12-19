import './index.css'
import { useEffect, useState } from 'react'
import store from '@/provider/store'
import { User } from '@/types/user'
import { TextInput, Radio, CheckBox } from '@/components/form-content'
import Button from '@/components/button'
import type { Survey } from '@/types/survey'

export default function CreatePage() {
  const { user } = store.getState()
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [questions, setQuestions] = useState<{ title: string; qs: Survey[] }>({
    title: '',
    qs: []
  })

  useEffect(() => {
    if (user?.user !== null) {
      setCurrentUser(user?.user)
    }
  }, [user.user])

  function insertQuestion({ type, title, questions }: Survey) {
    setQuestions((prevQuestions) => ({
      ...prevQuestions,
      qs: [...prevQuestions.qs, { title: title, type: type, questions: questions }]
    }))
  }

  // console.log(questions)

  return (
    <div className="layout">
      <div className="survey-btns">
        <Button
          onClick={() => {
            insertQuestion({ title: '', type: 'text-input', questions: [] })
          }}
          type="secondary"
        >
          Add Input
        </Button>

        <Button
          onClick={() => {
            insertQuestion({ title: '', type: 'check-box', questions: [] })
          }}
          type="secondary"
        >
          Add Check Box
        </Button>

        <Button
          onClick={() => {
            insertQuestion({ title: '', type: 'radio', questions: [] })
          }}
          type="secondary"
        >
          Add Radio
        </Button>
      </div>

      {questions?.qs?.map((q, i) => {
        if (q.type === 'text-input') {
          return <TextInput key={i} />
        } else if (q.type === 'radio') {
          return <Radio key={i} />
        } else if (q.type === 'check-box') {
          return (
            <CheckBox
              key={i}
              title={'what is the animal that has a tale?'}
              choices={[
                { id: '1', label: 'bird' },
                { id: '2', label: 'fish' },
                { id: '3', label: 'food' },
                { id: '4', label: 'bear' }
              ]}
            />
          )
        }
      })}
    </div>
  )
}
