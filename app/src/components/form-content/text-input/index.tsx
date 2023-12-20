import { ChangeEvent, useState } from 'react'
import './index.css'
import type { InputProps } from '@/types/survey'

export default function Index({ title, placeholder }: InputProps) {
  const [value, setValue] = useState<string>('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  return (
    <div className="input-question">
      <label className="input-question-title">{title}</label>

      <input
        type="text"
        placeholder={placeholder}
        className="input-question-input"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
