import { useParams } from 'react-router-dom'

export default function Index() {
  const param = useParams()

  const survey_id = param.id

  return <div>{survey_id}</div>
}
