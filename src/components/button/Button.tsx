import React, { ReactNode, useEffect, useState } from 'react'

interface ButtonProps {
  children?: ReactNode
  bdColor?: string
  focusRingColor?: string
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  const [bgColor, setBgColor] = useState('slate')
  const [focusRingColor, setFocusRingColor] = useState('slate')

  useEffect(() => {
    if (props.bdColor != undefined) {
      setBgColor(props.bdColor)
    }
  }, [props.bdColor])

  useEffect(() => {
    if (props.focusRingColor != undefined) {
      setFocusRingColor(props.focusRingColor)
    }
  }, [props.focusRingColor])

  return (
    <button className={`
      p-2 min-w-20 
      font-bold rounded 
      focus:outline-none focus:ring-2 
      focus:ring-${focusRingColor}-800 
      bg-${bgColor}-400 hover:bg-${bgColor}-600 
      dark:focus:ring-${focusRingColor}-300 
      dark:bg-${bgColor}-700 dark:hover:bg-${bgColor}-500 `}
      onClick={() => props.onClick && props.onClick()}>
      {props.children}
    </button>
  )
}

export default Button