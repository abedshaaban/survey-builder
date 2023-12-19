type checkBoxItem = {
  id: string
  label: string
}

type CheckBoxProps = {
  title: string
  choices: checkBoxItem[]
}

type InputProps = {
  id: string
  title: string
  placeholder: string
}

export type Survey = {
  type: string
  title: string
  questions: []
}
