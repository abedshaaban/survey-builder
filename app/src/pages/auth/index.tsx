// import axios from 'axios'

import { Login } from '@/end-points'
import './index.css'
import { FormEvent, useState } from 'react'
import { setLocal } from '@/utils'
import { setUser } from '@/provider/userSlice'
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

export default function Index() {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const [isSignIn, setIsSignIn] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [credentials, setCredentials] = useState({
    email: '',
    pwd: '',
    first_name: '',
    last_name: ''
  })

  function handleFormChange() {
    setIsSignIn(!isSignIn)
  }

  function resetForm() {
    setCredentials({ email: '', pwd: '', first_name: '', last_name: '' })
  }

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    resetForm()

    let res

    // if (isSignIn) {
    res = await Login({ email: credentials.email, password: credentials.pwd })

    if (res?.data?.user) {
      setLocal({ key: 'token', val: res?.data?.token })

      dispatch(setUser(await res?.data?.user))
    } else {
      setErrorMsg('An error has occurred')
    }
    // } else {
    //   res = await axios.post(
    //     'http://localhost/hospital-management-system/server/signup.php',
    //     {
    //       email: credentials.email,
    //       password: credentials.pwd,
    //       first_name: credentials.first_name,
    //       last_name: credentials.last_name,
    //       birth_date: credentials.birth_date
    //     },
    //     {
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json'
    //       }
    //     }
    //   )

    //   setIsSignIn(true)
    // }

    // if (!res?.data?.status) {
    //   // handle error
    //   setErrorMsg(res?.data?.error)
    // }

    console.log(res?.data)
  }

  return (
    <div className="home">
      <form onSubmit={handleFormSubmit} className="home-form">
        <div className="home-form-header flex-row">
          <h2
            className={`${isSignIn && 'home-form-header-not-active'}`}
            onClick={handleFormChange}
          >
            Register
          </h2>
          <h2
            className={`${!isSignIn && 'home-form-header-not-active'}`}
            onClick={handleFormChange}
          >
            Sign in
          </h2>
        </div>

        <div className="home-form-body flex-col">
          <div style={{ color: 'red' }} className="flex-row center">
            {errorMsg}
          </div>
          {isSignIn ? (
            <>
              <div className="ui-get-values">
                <label>Email:</label>

                <input
                  className={'ui-input'}
                  type={'email'}
                  value={credentials.email}
                  placeholder={'example@domain.com'}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      email: e.target.value
                    })
                  }}
                  required
                />
              </div>

              <div className="ui-get-values">
                <label>Password:</label>

                <input
                  className={'ui-input'}
                  type={'password'}
                  value={credentials.pwd}
                  placeholder={'*********'}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      pwd: e.target.value
                    })
                  }}
                  required
                  min={8}
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex-row home-form-body-two-inputs">
                <div className="ui-get-values">
                  <label>First name:</label>

                  <input
                    className={'ui-input'}
                    type={'text'}
                    value={credentials.first_name}
                    placeholder={'Mohamad'}
                    onChange={(e) => {
                      setCredentials({
                        ...credentials,
                        first_name: e.target.value
                      })
                    }}
                    required
                  />
                </div>

                <div className="ui-get-values">
                  <label>Last name:</label>

                  <input
                    className={'ui-input'}
                    type={'text'}
                    value={credentials.last_name}
                    placeholder={'Shaaban'}
                    onChange={(e) => {
                      setCredentials({
                        ...credentials,
                        last_name: e.target.value
                      })
                    }}
                    required
                  />
                </div>
              </div>

              <div className="ui-get-values">
                <label>Email:</label>

                <input
                  className={'ui-input'}
                  type={'email'}
                  value={credentials.email}
                  placeholder={'example@domain.com'}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      email: e.target.value
                    })
                  }}
                  required
                />
              </div>

              <div className="ui-get-values">
                <label>Password:</label>

                <input
                  className={'ui-input'}
                  type={'password'}
                  value={credentials.pwd}
                  placeholder={'*********'}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      pwd: e.target.value
                    })
                  }}
                  required
                  min={8}
                />
              </div>
            </>
          )}
        </div>

        <div className="home-form-footer center">
          <button type="submit">{isSignIn ? 'Sign in' : 'Register'}</button>
        </div>
      </form>
    </div>
  )
}
