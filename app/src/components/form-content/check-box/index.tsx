import { ChangeEvent, useState } from 'react'
import './index.css'
import { CheckBoxProps } from '@/types/survey'

export default function Index({ title, choices }: CheckBoxProps) {
  const [checked, setChecked] = useState<[] | string[]>([])

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    let updatedList = [...checked]

    if (e.target.checked) {
      updatedList = [...checked, e.target.value]
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1)
    }

    setChecked(updatedList)
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
                type="checkbox"
                name="text"
                value={q.id}
                onChange={handleCheck}
              />

              <label htmlFor={q.id}>{q.label}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
