import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'

export async function Login({ email, password }: { email: string; password: string }) {
  let res = await axios.post(
    '/auth/login',
    {
      email: email,
      password: password
    },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )

  return res
}
