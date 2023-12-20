import { Link } from 'react-router-dom'
import './index.css'

type FileProps = {
  title: string
  url: string
}

export default function Index({ title, url }: FileProps) {
  return (
    <Link to={`/survey/${url}`} className='file'>
      <img src="/icons/file.svg" alt="surveys" />
      <p>{title}</p>
    </Link>
  )
}
