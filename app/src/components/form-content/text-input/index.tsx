import './index.css'
import type { InputProps } from '@/types/survey'

export default function Index({ id, title, placeholder }: InputProps) {
  return (
    <div className="input-question">
      <label className="input-question-title" htmlFor={id}>
        {title}
      </label>

      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="input-question-input"
      />
    </div>
  )
}
