import { getLocal, removeLocal } from '@/utils'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'

export async function Register({
  email,
  password,
  firstName,
  lastName
}: {
  email: string
  password: string
  firstName: string
  lastName: string
}) {
  let res = await axios.post(
    '/auth/register',
    {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
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

export async function updateProfile({
  firstName,
  lastName
}: {
  firstName: string
  lastName: string
}) {
  const token = getLocal({ key: 'token' })

  let res = await axios.post(
    '/user/update-profile',
    {
      firstName: firstName,
      lastName: lastName
    },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
  )

  return res
}

export async function getUserByToken() {
  const token = getLocal({ key: 'token' })

  let res = await axios.post(
    '/user/get-user',
    {},
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
  )

  return res
}

export async function Logout() {
  removeLocal({ key: 'token' })
}
