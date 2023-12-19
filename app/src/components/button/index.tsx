import { MouseEventHandler, ReactNode } from 'react'

import './index.css'

type Props = {
  children?: ReactNode
  type?: 'normal' | 'important' | 'secondary'
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  className?: string
  isText?: boolean
}

export default function Button({
  children,
  type = 'normal',
  onClick,
  className,
  isText = true
}: Props) {
  return (
    <button
      className={`btn ${type} ${className} ${isText && 'is-text'}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
