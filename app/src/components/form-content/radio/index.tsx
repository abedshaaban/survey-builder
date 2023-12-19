import { useState } from 'react'
import './index.css'
import type { CheckBoxProps } from '@/types/survey'

export default function Index({ title, choices }: CheckBoxProps) {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(
    choices[0]?.id || null
  )

  const handleCheckboxChange = (id: string) => {
    setSelectedChoice(id === selectedChoice ? null : id)
  }

  return (
    <div className="checbox-questions">
      <h2 className="checbox-questions-title">{title}</h2>

      <div className="checkbox-questions-list">
        {choices?.map((q) => {
          return (
            <div className="checkbox-questions-list-item" key={q.id}>
              <input
                id={q.id}
                type="radio"
                value={q.id}
                checked={q.id === selectedChoice}
                onChange={() => handleCheckboxChange(q.id)}
              />

              <label htmlFor={q.id}>{q.label}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
