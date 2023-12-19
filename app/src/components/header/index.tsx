import Button from '@/components/button'
import { logoutUser } from '@/provider/userSlice'
import store from '@/provider/store'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Logout } from '@/end-points'
import './index.css'

export default function Header() {
  const { user } = store.getState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    Logout()
    dispatch(logoutUser())
    navigate(0)
  }

  return (
    <header className="header">
      <Link to={'/'} className="header-title-div flex-row">
        <span>Survey Builder</span>
      </Link>

      <div className="header-btn">
        {user?.user?.role === 2 && (
          <Link to={'/u/create'}>
            <Button className="header-btn-create" isText={false}>
              <h3>Create</h3>
            </Button>
          </Link>
        )}

        <Link to={`/u`}>
          <Button isText={false}>
            <img
              className="header-btn-icons"
              src="/icons/profile-pic.svg"
              alt="profile logo"
            />
          </Button>
        </Link>

        <Button type="important" onClick={handleLogout} isText={false}>
          <img
            style={{ padding: '9px' }}
            className="header-btn-icons"
            src="/icons/exit.svg"
            alt="profile logo"
          />
        </Button>
      </div>
    </header>
  )
}
