// import axios from 'axios'

import './index.css'
import { FormEvent, useState } from 'react'
// import { setSelfUser } from '@/provider/selftUserSlice'
// import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Index() {
  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const [signIn, setSignIn] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [credentials, setCredentials] = useState({
    email: '',
    pwd: '',
    first_name: '',
    last_name: '',
    birth_date: ''
  })

  function handleFormChange() {
    setSignIn(!signIn)
  }

  function resetForm() {
    setCredentials({ email: '', pwd: '', first_name: '', last_name: '', birth_date: '' })
  }

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    resetForm()

    let res

    //   if (signIn) {
    //     res = await axios.post(
    //       'http://localhost/hospital-management-system/server/signin.php',
    //       {
    //         email: credentials.email,
    //         password: credentials.pwd
    //       },
    //       {
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json'
    //         }
    //       }
    //     )

    //     if (res?.data?.data) {
    //       dispatch(setSelfUser(await res?.data?.data))

    //       const path = res?.data?.data?.privilege

    //       navigate(`/u/${path}`)
    //     } else {
    //       setErrorMsg('An error has occurred')
    //     }
    //   } else {
    //     res = await axios.post(
    //       'http://localhost/hospital-management-system/server/signup.php',
    //       {
    //         email: credentials.email,
    //         password: credentials.pwd,
    //         first_name: credentials.first_name,
    //         last_name: credentials.last_name,
    //         birth_date: credentials.birth_date
    //       },
    //       {
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json'
    //         }
    //       }
    //     )

    //     setSignIn(true)
    //   }

    //   if (!res?.data?.status) {
    //     // handle error
    //     setErrorMsg(res?.data?.error)
    //   }

    //   // console.log(res?.data)
  }

  return (
    <div className="home">
      <form onSubmit={handleFormSubmit} className="home-form">
        <div className="home-form-header flex-row">
          <h2
            className={`${signIn && 'home-form-header-not-active'}`}
            onClick={handleFormChange}
          >
            Register
          </h2>
          <h2
            className={`${!signIn && 'home-form-header-not-active'}`}
            onClick={handleFormChange}
          >
            Sign in
          </h2>
        </div>

        <div className="home-form-body flex-col">
          <div style={{ color: 'red' }} className="flex-row center">
            {errorMsg}
          </div>
          {signIn ? (
            <>
              <div className="ui-get-values">
                <label>Email:</label>

                <input
                  className={'ui-input'}
                  type={'email'}
                  value={credentials.email}
                  placeholder={'example@domain.com'}
                  onChange={(val) => {
                    setCredentials({
                      ...credentials,
                      email: val as unknown as string
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
                  onChange={(val) => {
                    setCredentials({
                      ...credentials,
                      pwd: val as unknown as string
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
                    onChange={(val) => {
                      setCredentials({
                        ...credentials,
                        first_name: val as unknown as string
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
                    onChange={(val) => {
                      setCredentials({
                        ...credentials,
                        last_name: val as unknown as string
                      })
                    }}
                    required
                  />
                </div>
              </div>

              <div className="ui-get-values">
                <label>Birth date:</label>

                <input
                  className={'ui-input'}
                  type={'date'}
                  value={credentials.birth_date}
                  placeholder={'YYYY-MM-DD'}
                  onChange={(val) => {
                    setCredentials({
                      ...credentials,
                      birth_date: val as unknown as string
                    })
                  }}
                  required
                />
              </div>

              <div className="ui-get-values">
                <label>Email:</label>

                <input
                  className={'ui-input'}
                  type={'email'}
                  value={credentials.email}
                  placeholder={'example@domain.com'}
                  onChange={(val) => {
                    setCredentials({
                      ...credentials,
                      email: val as unknown as string
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
                  onChange={(val) => {
                    setCredentials({
                      ...credentials,
                      pwd: val as unknown as string
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
          <button type="submit">{signIn ? 'Sign in' : 'Register'}</button>
        </div>
      </form>
    </div>
  )
}
