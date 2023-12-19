type checkBoxItem = {
  id: string
  label: string
}

type CheckBoxProps = {
  title: string
  choices: checkBoxItem[]
}

export type Survey = {
  type: string
  title: string
  questions: []
}
