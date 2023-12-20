import './index.css'
import { useEffect, useState } from 'react'
import store from '@/provider/store'
import { User } from '@/types/user'
import { TextInput, Radio, CheckBox } from '@/components/form-content'
import Button from '@/components/button'
import type { Survey, QuestionType } from '@/types/survey'
import { nanoid } from 'nanoid'

export default function CreatePage() {
  const { user } = store.getState()
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [questions, setQuestions] = useState<Survey>({
    id: nanoid(9),
    title: '',
    questions: []
  })

  useEffect(() => {
    if (user?.user !== null) {
      setCurrentUser(user?.user)
    }
  }, [user.user])

  function insertQuestion({ id, type, title, questions, placeholder }: QuestionType) {
    setQuestions((prevQuestions) => ({
      ...prevQuestions,
      questions: [
        ...prevQuestions.questions,
        {
          id: id,
          title: title,
          type: type,
          questions: questions,
          placeholder: placeholder
        }
      ]
    }))
  }

  function handlePublish() {
    console.log(questions)
  }

  return (
    <div className="layout">
      <div className="survey-btns">
        <Button
          onClick={() => {
            insertQuestion({
              id: nanoid(9),
              title: 'How is your day?',
              type: 'text-input',
              placeholder: 'answer goes here',
              questions: []
            })
          }}
          type="secondary"
        >
          Add Input
        </Button>

        <Button
          onClick={() => {
            insertQuestion({
              id: nanoid(9),
              title: 'what are your best weapons?',
              type: 'check-box',
              questions: [
                { id: nanoid(9), label: 'Pump' },
                { id: nanoid(9), label: 'AR' },
                { id: nanoid(9), label: 'tactical' },
                { id: nanoid(9), label: 'sniper' }
              ]
            })
          }}
          type="secondary"
        >
          Add Check Box
        </Button>

        <Button
          onClick={() => {
            insertQuestion({
              id: nanoid(9),
              title: 'what is on your mind?',
              type: 'radio',
              questions: [
                { id: nanoid(9), label: 'fortnite' },
                { id: nanoid(9), label: 'fortnite lego' },
                { id: nanoid(9), label: 'fortnite racing' },
                { id: nanoid(9), label: 'fortnite pvp' },
                { id: nanoid(9), label: 'FORTNITE IN CAPS' }
              ]
            })
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

      {questions?.questions?.map((q, i) => {
        if (q.type === 'text-input') {
          return (
            <TextInput key={i} title={q.title} placeholder={q.placeholder as string} />
          )
        } else if (q.type === 'radio') {
          return <Radio key={i} title={q.title} choices={q.questions} />
        } else if (q.type === 'check-box') {
          return <CheckBox key={i} title={q.title} choices={q.questions} />
        }
      })}

      <div className="survey-footer">
        <Button onClick={handlePublish}>Publish</Button>
      </div>
    </div>
  )
}
