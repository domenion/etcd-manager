'use client'

import React, { useEffect } from 'react'
import HierarchyDisplay from './HierarchyDisplay'
import WithLoadingAndError from '../shared/WithLoadingAndError'
import { useEtcdNode } from '@/hooks/use-etcd-node'

const loadNode = async (key: string): Promise<KVNode | undefined> => {
  return
}

const Hierarchy = () => {
  const { getNode, data, isLoading, error } = useEtcdNode()
  useEffect(() => {
    getNode("/")
  }, [getNode])

  return (
    <WithLoadingAndError isLoading={isLoading} error={error}>
      <div className='m-2 p-2 w-80 justify-left border border-slate-500 rounded-lg'>
        {data != undefined && <HierarchyDisplay node={data.node} showChildren={false} />}
      </div>
    </WithLoadingAndError>
  )
}

export default Hierarchy