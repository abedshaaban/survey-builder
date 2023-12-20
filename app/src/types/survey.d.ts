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

export type QuestionType = {
  id: string
  type: string
  title: string
  questions: []
}

export type Survey = {
  id: string
  title: string
  questions: QuestionType[]
}
