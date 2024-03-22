import React from 'react'
import Hierarchy from '../hierarchy/Hierarchy'

const data: KVNode = {
  value: 'root',
  nodes: [
    {
      value: "child1"
    },
    {
      value: "child2",
      nodes: [
        {
          value: "child3"
        }
      ]
    },
    {
      value: "child4",
      nodes: [
        {
          value: "child5"
        }
      ]
    }
  ]
}

const SideBar = () => {
  return (
    <div>
      <Hierarchy data={data} />
    </div>
  )
}

export default SideBar