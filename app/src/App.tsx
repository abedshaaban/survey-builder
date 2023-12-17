import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './pages/auth'
import Feed from './pages/feed'
import { useEffect } from 'react'
// import { userSlice } from '@/provider/userSlice'
import { User } from '@/types/user'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {
  const user: User | null = useSelector((state: any) => state.user.user)
  // const dispatch = useDispatch()

  // const setUser = async (t: string) => {
  //   const userData = await getUserByToken(t)

  //   dispatch(setSelfUser(userData))
  // }

  useEffect(() => {
    const token = localStorage.getItem('cookie')

    if (user === null && token) {
      // const runSetUser = async () => {
      // await setUser(token)
      // }
      // runSetUser()
    }
  }, [user])

  return (
    <>
      <BrowserRouter>
        <Routes>
          {!user ? (
            <Route path="*" element={<Auth />} />
          ) : (
            <>
              <Route path="/feed" index element={<Feed />} />
              <Route path="*" element={<p>404 page not found</p>} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  )
}
