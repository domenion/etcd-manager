'use client'

import React from 'react'
import HierarchyDisplay from './HierarchyDisplay'
import WithLoadingAndError from '../shared/WithLoadingAndError'
import { useEtcdNode } from '@/hooks/use-etcd-node'

const Hierarchy = () => {
  const { isLoading, error } = useEtcdNode()

  return (
    <WithLoadingAndError isLoading={isLoading} error={error}>
      <div className='m-2 p-2 justify-left border border-slate-500 rounded-lg w-full md:w-1/2 lg:w-1/3'>
        <HierarchyDisplay nodeKey="" />
      </div>
    </WithLoadingAndError>
  )
}

export default Hierarchy