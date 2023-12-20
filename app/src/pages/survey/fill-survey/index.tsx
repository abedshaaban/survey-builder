import './index.css'
import { CheckBox, Radio, TextInput } from '@/components/form-content'
import { GetSurveysById } from '@/end-points'
import { Survey } from '@/types/survey'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Index() {
  const param = useParams()
  const [survey, setSurvey] = useState<Survey>()
  const id = param.id as string

  useEffect(() => {
    const getSurvey = async () => {
      const data = await GetSurveysById({ id: id })

      setSurvey(data?.data?.survey as Survey)
    }

    getSurvey()
  }, [])

  return (
    <div className="fill-survey-page">
      <h1 className="fill-survey-page-h1">{survey?.title}</h1>

      {survey?.questions?.map((q, i) => {
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
    </div>
  )
}
