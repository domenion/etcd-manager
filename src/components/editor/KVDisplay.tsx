'use client'

import { useContentStore } from '@/stores/content'
import React, { useEffect, useState } from 'react'
import Button from '../button/Button'
import IconButton from '../button/IconButton'

interface KVDisplayProps {
}

const KVDisplay = (props: KVDisplayProps) => {
  const [kvRefList, setKvRefList] = useState<KVNode[]>([])
  const [kvList, setKvList] = useState<KVNode[]>([])
  const { current } = useContentStore()

  useEffect(() => {
    console.log('current:', current)
    const nodes = current.nodes?.filter(n => !n.dir)
    if (nodes && nodes.length > 0) {
      setKvList([...nodes.map(n => ({ key: n.key, value: n.value }))])
      setKvRefList([...nodes.map(n => ({ key: n.key, value: n.value }))])
    }
  }, [current])


  const handleValueChange = (ev: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setKvList(kvList => kvList.map(kv => {
      if (kv.key === key) {
        kv.value = ev.target.value
      }
      return kv
    }))
  }

  const applyChanged = () => {
    console.log("apply changed:", "not implemented")
  }

  const renderChanged = (key: string) => {
    return (
      <span>
        {isChanged(key) && "CHANGED!"}
      </span>
    )
  }

  const getKeyName = (key: string) => {
    const keyElements = key.split("/")
    return keyElements[keyElements.length - 1]
  }

  const isChanged = (key: string) => {
    return kvRefList.find(kv => kv.key === key)?.value != kvList.find(kv => kv.key === key)?.value
  }

  const renderEditButton = () => {
    return (
      <div className='flex flex-row'>
        <Button onClick={applyChanged}>Add</Button>
        {/* <button className='bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-900 dark:bg-sky-900 dark:hover:bg-sky-700 dark:focus:ring-sky-500 font-bold rounded min-w-20 p-2'>Add</button> */}
      </div>
    )
  }

  const renderApplyButton = () => {
    return (
      <div className='flex flex-row'>
        <Button>Apply</Button>
        {/* <button className='bg-emerald-500 hover:bg-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-900 dark:bg-emerald-900 dark:hover:bg-emerald-700 dark:focus:ring-emerald-500 font-bold rounded min-w-20 p-2' onClick={() => applyChanged()}>Apply</button> */}
      </div>
    )
  }

  return (
    <div className="flex flex-col m-2 p-2 w-full md:w-1/2 lg:w-2/3">
      <div className='flex flex-row gap-2 justify-between'>
        {renderEditButton()}
        {renderApplyButton()}
      </div>
      <ul>
        {
          kvList.map((kv) => (
            <li className='flex flex-col py-2' key={`kv-${kv.key}`}>
              <div className={'flex justify-items-end gap-2 py-1' + (isChanged(kv.key) ? ' text-yellow-500' : "")}>
                <IconButton
                // className="px-1 rounded bg-slate-400 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-800 dark:bg-slate-700 dark:hover:bg-slate-500 dark:focus:ring-slate-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </IconButton>
                <label className='font-bold' htmlFor={`key-${kv.key}`}>{getKeyName(kv.key)}: </label>
                {renderChanged(kv.key)}
              </div>
              <div className='flex gap-2'>
                <input className='rounded min-w-full px-2 py-1 bg-slate-400 dark:bg-slate-700' type="text" value={kv.value} onChange={(ev) => handleValueChange(ev, kv.key)} />
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default KVDisplay