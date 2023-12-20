import { useEffect, useState } from 'react'
import './index.css'
import { GetSurveys } from '@/end-points'
import Button from '@/components/button'

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
    <div>
      <Button
        onClick={() => {
          console.log(feed)
        }}
      >
        log
      </Button>
    </div>
  )
}
