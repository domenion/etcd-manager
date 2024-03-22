import React from 'react'

interface WithLoadingAndErrorProps {
  children: React.ReactNode
  isLoading?: boolean
  error?: any
}

const WithLoadingAndError = (props: WithLoadingAndErrorProps) => {
  if (props.isLoading) {
    return (
      <div>
        loading...
      </div>
    )
  }

  if (props.error) {
    return (
      <div>
        {props.error.message}
      </div>
    )
  }

  return (
    <div>{props.children}</div>
  )
}

export default WithLoadingAndError