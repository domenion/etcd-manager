import React, { ReactNode, useEffect, useState } from 'react'

interface IconButtonProps {
  children?: ReactNode
  bdColor?: string
  focusRingColor?: string
  onClick?: () => void
}

const IconButton = (props: IconButtonProps) => {
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
      px-1 min-w-7
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

export default IconButton