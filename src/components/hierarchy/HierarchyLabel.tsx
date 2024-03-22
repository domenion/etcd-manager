'use client'

import React, { useState } from 'react'

interface HierarchyLabelProps {
  name: string
  isExpanded: boolean
  onChange?: (v: boolean) => void
  onActivate?: () => void
}

const HierarchyLabel = (props: HierarchyLabelProps) => {
  const [isExpanded, setIsExpanded] = useState(props.isExpanded)
  const handleOnClick = () => {
    setIsExpanded(pre => !pre)
    if (props.onChange != undefined)
      props.onChange(isExpanded)
  }
  const activate = () => {
    if (props.onActivate != undefined) {
      props.onActivate()
    }
  }
  return (
    <div className='flex p-0.5'>
      <div className='flex px-2 w-11 justify-center'>
        <button className='mx-2' onClick={handleOnClick}>{isExpanded ? '-' : '+'}</button>
      </div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => activate()}>{props.name}</button>
    </div>
  )
}

export default HierarchyLabel