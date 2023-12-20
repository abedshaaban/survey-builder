type checkBoxItem = {
  id: string
  label: string
}

type CheckBoxProps = {
  title: string
  choices: null | checkBoxItem[]
}

type InputProps = {
  title: string
  placeholder: string
}

export type QuestionType = {
  id: string
  type: string
  title: string
  placeholder?: string
  questions: null | checkBoxItem[]
}

export type Survey = {
  id: string
  title: string
  questions: QuestionType[]
}
