import { ChangeEvent, useEffect, useState } from 'react'
import './index.css'
import { CheckBoxProps } from '@/types/survey'

export function CheckBox({ title, choices }: CheckBoxProps) {
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
              <input id={q.id} type="checkbox" value={q.id} onChange={handleCheck} />

              <label htmlFor={q.id}>{q.label}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function CreateCheckBox({ title, choices }: CheckBoxProps) {
  const [q_title, setQ_Title] = useState(title)
  const [multi, setMulti] = useState<{ value: string; id: string }[] | []>([
    { id: '', value: '' }
  ])

  useEffect(() => {
    const lastChoice = multi[multi.length - 1]

    if (lastChoice.value !== '') {
      setMulti((prev) => {
        return { ...prev, value: '' }
      })
    }
  }, [multi])

  return (
    <div className="checbox-questions">
      <input
        type="text"
        placeholder="Check box question ..."
        className="checbox-questions-title-create"
        value={q_title}
        onChange={(e) => {
          setQ_Title(e.target.value)
        }}
      />

      <div className="checkbox-questions-list">
        {multi?.map((q, i) => {
          return (
            <div className="checkbox-questions-list-item" key={i}>
              <input type="checkbox" />

              {/* <label htmlFor={q.id}>{q.label}</label> */}
              <input
                type="text"
                placeholder={`option ${i + 1}`}
                className="checkbox-questions-list-item-input-create"
                onChange={() => {}}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
