import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { setUser } from '@/provider/userSlice'
import { User } from '@/types/user'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByToken } from './end-points'
import Header from '@/components/header'
import Auth from './pages/auth'
import Feed from './pages/feed'
import UserPage from './pages/u'
import CreatePage from './pages/u/create'
import FillSurvey from './pages/survey/fill-survey'
import { getLocal } from './utils'

export default function App() {
  const user: User | null = useSelector((state: any) => state.user.user)
  const dispatch = useDispatch()

  const getUser = async () => {
    const res = await getUserByToken()

    dispatch(setUser(res?.data?.user))
  }

  useEffect(() => {
    const token = getLocal({ key: 'token' })

    if (user === null && token) {
      const runSetUser = async () => {
        await getUser()
      }
      runSetUser()
    }
  }, [user])

  return (
    <>
      <BrowserRouter>
        {user && <Header />}

        <Routes>
          {!user ? (
            <Route path="*" element={<Auth />} />
          ) : (
            <>
              <Route path="/feed" index element={<Feed />} />
              <Route path="/u" element={<UserPage />} />
              <Route path="/survey/:id" element={<FillSurvey />} />
              <Route path="*" element={<p>404 page not found</p>} />

              {user?.role === 2 && <Route path="/u/create" element={<CreatePage />} />}
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  )
}
