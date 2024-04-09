'use client'

import React, { useState } from 'react'
import HierarchyLabel from './HierarchyLabel'
import { useEtcdNode } from '@/hooks/use-etcd-node'
import { useContentStore } from '@/stores/content'

interface HierarchyDisplayProps {
  nodeKey: string
}

const HierarchyDisplay = (props: HierarchyDisplayProps) => {
  const [node, setNode] = useState<KVNode>({ key: props.nodeKey })
  const [showChildren, setShowChildren] = useState(false)
  const { getNode } = useEtcdNode()
  const { setContent } = useContentStore()

  const handleToggleExpand = (isExpanded: boolean) => {
    if (isExpanded) {
      getNode(props.nodeKey).then(n => {
        setNode(n)
      })
    }
    setShowChildren(isExpanded)
  }

  const handleActivate = () => {
    getNode(props.nodeKey).then(newNode => {
      setNode(newNode)
      setShowChildren(true)
      setContent(newNode)
    })
  }

  const getName = () => {
    if (!node) {
      return ""
    }
    if (node.key === "") {
      return "root"
    }
    const keyElements = node.key != undefined ? node.key.split("/") : []
    return keyElements.length > 0 ? keyElements[keyElements.length - 1] : ""
  }

  return (
    <>
      <HierarchyLabel name={getName()} expand={showChildren} onToggleExpand={handleToggleExpand} onActivate={handleActivate}
        hasChildren={node.nodes ? node.nodes.filter(n => n.dir).length > 0 : undefined} />
      {
        showChildren && (
          <ul className='ms-6'>
            {
              node.nodes?.map((n, i) => (
                n.dir && <li key={`${i}-${n.value}`}><HierarchyDisplay nodeKey={n.key} /></li>
              ))
            }
          </ul>
        )
      }
    </>
  )
}

export default HierarchyDisplay