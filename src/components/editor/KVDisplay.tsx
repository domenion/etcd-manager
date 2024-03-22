'use client'

import React, { useEffect, useState } from 'react'

interface KVDisplayProps {
  key: string
  applyChanged?: (kvList: KeyValuePair[]) => void
}

const loadValues = async (key: string): Promise<KeyValuePair[] | undefined> => {
  return undefined
}

const KVDisplay = (props: KVDisplayProps) => {
  const [kvRefList, setKvRefList] = useState<KeyValuePair[]>([])
  const [kvList, setKvList] = useState<KeyValuePair[]>([])
  useEffect(() => {
    loadValues(props.key).then(kv => {
      if (kv) {
        setKvRefList(kv)
        setKvList([...kvRefList.map(kv => ({ key: kv.key, value: kv.value }))])
      }
    })
  }, [props.key, kvRefList])

  const onValueChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setKvRefList(kvList => kvList.map(kv => {
      if (kv.key === key) {
        kv.value = ev.target.value
      }
      return kv
    }))
  }

  const displayChanged = (key: string) => {
    const isChanged = kvRefList.find(kv => kv.key === key)?.value != kvList.find(kv => kv.key === key)?.value
    return (
      <div className='flex gap-4 py-2'>
        {isChanged && "changed"}
      </div>
    )
  }

  return (
    <>
      <ul>
        {
          kvRefList.map((kv, i) => (
            <li className='flex flex-col py-2' key={`kv-${kv.key}`}>
              <div className='flex justify-items-end'>
                <label htmlFor={`key-${kv.key}`}>{kv.key}: </label>
              </div>
              <div className='pl-4'>
                <input className='bg-slate-800 rounded-sm' type="text" value={kv.value} onChange={(ev) => onValueChangeHandler(ev, kv.key)} />
                {displayChanged(kv.key)}
              </div>
            </li>
          ))
        }
      </ul>
      <button className='bg-sky-800 rounded-sm px-2' onClick={() => props.applyChanged && props.applyChanged(kvList)}>Apply</button>
    </>
  )
}

export default KVDisplay