import Button from '@/components/button'

import './index.css'

// import { logoutSelfUser } from '@/provider/selftUserSlice'
import store from '@/provider/store'
// import { removeJWTToken } from '@/util'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const { user } = store.getState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const path = user?.user?.role_id === 1 ? 'admin' : 'user'

  const handleLogout = () => {
    // removeJWTToken()
    // dispatch(logoutSelfUser)
    // navigate(0)
  }

  return (
    <header className="header">
      <Link to={'/'} className="header-title-div flex-row">
        <span>Survey Builder</span>
      </Link>

      <div className="header-btn">
        <Link to={`/u/${path}`}>
          <Button>
            <img
              className="header-btn-icons"
              src="/icons/user-logo.svg"
              alt="profile logo"
            />
          </Button>
        </Link>

        <Button type="important" onClick={handleLogout}>
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
