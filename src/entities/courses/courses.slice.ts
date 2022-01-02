import { useMemo } from 'react'
import { bindActionCreators, createAsyncThunk, createReducer, Dispatch } from '@reduxjs/toolkit'
import * as courseResource from 'api/course.resource'
import { Course, CoursesCollection } from './courses.types'

/*--------------------------------------------------
  actions
  -------------------------------------------------- */
export const getCourses = createAsyncThunk('courses/fetchAllCourses', () => {
  return courseResource.getCourses({}, {})
})

export const getCourseById = createAsyncThunk('courses/getCourseById', (id: string) => {
  return courseResource.getCourseById({}, id)
})

export const getCourseByUrl = createAsyncThunk('courses/getCourseByUrl', (id: string) => {
  return courseResource.getCourseByUrl({}, id)
})

/*--------------------------------------------------
  dispatch actions
  -------------------------------------------------- */
export const useCourseActions = (dispatch: Dispatch) => {
  return useMemo(() => bindActionCreators({ getCourses, getCourseByUrl, getCourseById }, dispatch), [dispatch])
}

/*--------------------------------------------------
  reducers
  -------------------------------------------------- */
export const coursesCollectionReducer = createReducer<CoursesCollection>({}, builder => {
  builder.addCase(getCourses.fulfilled, (state, action) => {
    return action.payload
  })
})

export const courseReducer = createReducer<{ data: Course | null }>({ data: null }, builder => {
  builder
    .addCase(getCourseById.fulfilled, (state, action) => {
      return { data: action.payload }
    })
    .addCase(getCourseByUrl.fulfilled, (state, action) => {
      return { data: action.payload }
    })
})

export const courseMetaReducer = createReducer<{ status: 'succeeded' | 'pending' | 'failed' }>(
  { status: 'pending' },
  builder => {
    builder
      .addCase(getCourseById.fulfilled, () => ({ status: 'succeeded' }))
      .addCase(getCourseById.pending, () => ({ status: 'pending' }))
      .addCase(getCourseById.rejected, () => ({ status: 'failed' }))
      .addCase(getCourseByUrl.fulfilled, () => ({ status: 'succeeded' }))
      .addCase(getCourseByUrl.pending, () => ({ status: 'pending' }))
      .addCase(getCourseByUrl.rejected, () => ({ status: 'failed' }))
  }
)
