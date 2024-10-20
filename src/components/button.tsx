'use client'

import Arrow from '../assets/svgs/arrow-link.svg'

interface ButtonProps {
  text: string
  onClick: () => void
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="btn-blue">
      {text}
      <Arrow />
    </button>
  )
}

export default Button
