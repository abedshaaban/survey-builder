import './index.css'
import { useEffect, useState } from 'react'
import store from '@/provider/store'
import { User } from '@/types/user'
import { TextInput, Radio, CheckBox } from '@/components/form-content'
import Button from '@/components/button'
import type { Survey } from '@/types/survey'
import { nanoid } from 'nanoid'

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

      <div className="survey-title-div">
        <input
          type="text"
          placeholder="Title"
          value={questions.title}
          onChange={(e) => {
            setQuestions((prevQuestions) => ({
              ...prevQuestions,
              title: e.target.value
            }))
          }}
        />
      </div>

      {questions?.qs?.map((q, i) => {
        if (q.type === 'text-input') {
          return (
            <TextInput
              key={i}
              id={nanoid(9)}
              title={'tell me about yourself'}
              placeholder={'write here'}
            />
          )
        } else if (q.type === 'radio') {
          return (
            <Radio
              key={i}
              title={'what is on your mind?'}
              choices={[
                { id: nanoid(9), label: 'fortnite' },
                { id: nanoid(9), label: 'fortnite lego' },
                { id: nanoid(9), label: 'fortnite racing' },
                { id: nanoid(9), label: 'fortnite pvp' },
                { id: nanoid(9), label: 'FORTNITE IN CAPS' }
              ]}
            />
          )
        } else if (q.type === 'check-box') {
          return (
            <CheckBox
              key={i}
              title={'what is the animal that has a tale?'}
              choices={[
                { id: nanoid(9), label: 'bird' },
                { id: nanoid(9), label: 'fish' },
                { id: nanoid(9), label: 'food' },
                { id: nanoid(9), label: 'bear' }
              ]}
            />
          )
        }
      })}
    </div>
  )
}
