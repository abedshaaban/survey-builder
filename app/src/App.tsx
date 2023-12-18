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

export default function App() {
  const user: User | null = useSelector((state: any) => state.user.user)
  const dispatch = useDispatch()

  const getUser = async (t: string) => {
    const res = await getUserByToken({ token: t })

    dispatch(setUser(res?.data?.user))
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (user === null && token) {
      const runSetUser = async () => {
        await getUser(token)
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
              <Route path="/u" index element={<UserPage />} />
              <Route path="*" element={<p>404 page not found</p>} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  )
}
