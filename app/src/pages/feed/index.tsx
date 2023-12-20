import { useEffect, useState } from 'react'
import './index.css'
import { GetSurveys } from '@/end-points'
import Button from '@/components/button'
import File from '@/components/file'

export default function Feed() {
  const [feed, setFeed] = useState<any>()

  useEffect(() => {
    const getFeed = async () => {
      const data = await GetSurveys()

      setFeed(data?.data?.feed)
      console.log(feed)
    }

    getFeed()
  }, [])

  return (
    <div className="feed-page">
      {feed?.map((file: { title: string; _id: string }, i: number) => {
        return <File key={i} title={file.title} url={file._id} />
      })}
    </div>
  )
}
