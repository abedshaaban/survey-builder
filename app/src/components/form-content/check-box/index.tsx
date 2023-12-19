import './index.css'

type checkBoxItem = {
  id: string
  label: string
}

type CheckBoxProps = {
  title: string
  choices: checkBoxItem[]
}

export default function Index({ title, choices }: CheckBoxProps) {
  return (
    <div className="checbox-questions">
      <h2 className="checbox-questions-title">{title}</h2>

      <div className="checkbox-questions-list">
        {choices?.map((q) => {
          return (
            <div className="checkbox-questions-list-item" key={q.id}>
              <input id={q.id} type="checkbox" name="text" value={q.id} />

              <label htmlFor={q.id}>{q.label}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
