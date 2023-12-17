import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './pages/auth'
import Feed from './pages/feed'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/feed" index element={<Feed />} />
          <Route path="*" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
