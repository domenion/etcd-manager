'use client'

import React, { useState } from 'react'
import HierarchyLabel from './HierarchyLabel'
import { useContentStore } from '@/stores/content'

interface HierarchyDisplayProps {
  node: KVNode
  showChildren: boolean
}

const HierarchyDisplay = (props: HierarchyDisplayProps) => {
  const [showChildren, setShowChildren] = useState(props.showChildren)
  const { changeContent: change } = useContentStore()
  const keyElement = props.node.key.split("/")
  const name = keyElement.length > 0 ? keyElement[props.node.key.split("/").length - 1] : ""

  const changeContent = () => {
    if (props.node != undefined) {
      change(props.node)
    }
  }

  return (
    <>
      <HierarchyLabel name={props.node.key === "/" ? "root" : name} isExpanded={showChildren} onChange={v => setShowChildren(!v)} onActivate={() => changeContent()} />
      {
        showChildren && (
          <ul className='ms-6'>
            {
              props.node.nodes?.map((d, i) => (
                <li key={`${i}-${d.value}`}>
                  <HierarchyDisplay node={d} showChildren={false} />
                </li>
              ))
            }
          </ul>
        )
      }
    </>
  )
}

export default HierarchyDisplay