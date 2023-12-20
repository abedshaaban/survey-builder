import { GetSurveysById } from '@/end-points'
import { Survey } from '@/types/survey'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Index() {
  const param = useParams()
  const [survey, setSurvey] = useState<Survey | any>()
  const id = param.id as string

  useEffect(() => {
    const getSurvey = async () => {
      const data = await GetSurveysById({ id: id })

      setSurvey(data)
    }

    getSurvey()
  }, [])

  console.log(survey)

  return <div>{id}</div>
}
