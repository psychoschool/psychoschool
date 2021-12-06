import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface ExampleResponse {
  id: number
  name: string
  email: string
}

export const exampleApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
    prepareHeaders: headers => headers
  }),
  endpoints: build => ({
    fetchExample: build.query<Array<ExampleResponse>, void>({
      query: () => '/users'
    })
  })
})

export const { useFetchExampleQuery } = exampleApi
