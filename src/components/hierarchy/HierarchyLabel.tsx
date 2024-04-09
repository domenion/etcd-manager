'use client'

import React, { useState } from 'react'
import Button from '../button/Button'
import IconButton from '../button/IconButton'

interface HierarchyLabelProps {
  name: string
  expand?: boolean
  onToggleExpand?: (v: boolean) => void
  onActivate?: () => void
  hasChildren?: boolean
}

const HierarchyLabel = (props: HierarchyLabelProps) => {
  const [isExpanded, setIsExpanded] = useState(props.expand)

  const handleOnClick = () => {
    setIsExpanded(pre => !pre)
    if (props.onToggleExpand != undefined)
      props.onToggleExpand(!isExpanded)
  }

  const activate = () => {
    if (props.onActivate != undefined)
      props.onActivate()
    setIsExpanded(true)
  }

  const renderExpandButton = () => {
    if (props.hasChildren === false) return (<></>)
    return (
      <IconButton
        // className='text-xl px-1 w-12 rounded bg-slate-500 hover:bg-slate-700 focus:ring-2 focus:outline-none focus:ring-slate-300 dark:bg-slate-700 dark:hover:bg-slate-500 dark:focus:ring-slate-300 text-slate-50' 
        onClick={handleOnClick}>
        {isExpanded ? '-' : '+'}
      </IconButton>
    )
  }

  return (
    <div className='flex p-0.5'>
      <div className='flex px-2 w-11 justify-center items-center'>
        {renderExpandButton()}
      </div>
      {/* <button
        className='py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 text-white dark:bg-blue-700 dark:hover:bg-blue-500 dark:focus:ring-blue-300'
        onClick={() => activate()}>
        {props.name}
      </button> */}
      <Button onClick={() => activate()}>
        {props.name}
      </Button>
    </div>
  )
}

export default HierarchyLabel