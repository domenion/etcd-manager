import React from 'react'

interface WithLoadingAndErrorProps {
  children: React.ReactNode
  isLoading?: boolean
  error?: any
}

const WithLoadingAndError = (props: WithLoadingAndErrorProps) => {
  if (props.isLoading) {
    return (
      <>
        loading...
      </>
    )
  }

  if (props.error) {
    return (
      <>
        {props.error.message}
      </>
    )
  }

  return (
    <>{props.children}</>
  )
}

export default WithLoadingAndError