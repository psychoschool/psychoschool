import React from 'react'
import { useFetchExampleQuery } from 'entities/example/example.api'

export const Example = () => {
  const { data = [], isLoading, isFetching, isError } = useFetchExampleQuery()

  return (
    <div>
      <p>Example</p>
      <p>isLoading {isLoading}</p>
      <p>isFetching {isFetching}</p>
      <p>isError {isError}</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
