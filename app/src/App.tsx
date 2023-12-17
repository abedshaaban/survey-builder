import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={'home'} />
          <Route path="/feed" index element={'feed'} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
