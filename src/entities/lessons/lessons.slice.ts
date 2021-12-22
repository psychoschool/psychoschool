import { useMemo } from 'react'
import { bindActionCreators, createAsyncThunk, createReducer, Dispatch } from '@reduxjs/toolkit'
import * as lessonResource from 'api/lesson.resource'
import { Lesson, LessonsCollection } from './lessons.types'
import { AddLessonParam, GetLessonReqParams } from 'resources/types'
import { signOut } from 'entities/auth/auth.actions'

/*--------------------------------------------------
  actions
  -------------------------------------------------- */
export const getUserLessons = createAsyncThunk('lessons/getUserLessons', (id: string) => {
  return lessonResource.getUserLessons({}, id)
})

export const getUserLessonByUrl = createAsyncThunk('lessons/getUserLessonByUrl', (params: GetLessonReqParams) => {
  return lessonResource.getUserLessonsByUrl({}, params)
})

export const addLesson = createAsyncThunk('lessons/addLesson', (params: AddLessonParam) => {
  return lessonResource.addLesson({}, params)
})

/*--------------------------------------------------
  dispatch actions
  -------------------------------------------------- */
export const useLessonActions = (dispatch: Dispatch) => {
  return useMemo(() => bindActionCreators({ getUserLessons, getUserLessonByUrl, addLesson }, dispatch), [dispatch])
}

/*--------------------------------------------------
  reducers
  -------------------------------------------------- */
export const lessonsCollectionReducer = createReducer<LessonsCollection>({}, builder => {
  builder
    .addCase(getUserLessons.fulfilled, (state, action) => {
      return action.payload
    })
    .addCase(signOut.fulfilled, () => {
      return {}
    })
})

export const lessonReducer = createReducer<{ data: Lesson | null }>({ data: null }, builder => {
  builder.addCase(getUserLessonByUrl.fulfilled, (state, action) => {
    return { data: action.payload }
  })
})

export const lessonMetaReducer = createReducer<{ status: 'succeeded' | 'pending' | 'failed' }>(
  { status: 'pending' },
  builder => {
    builder
      .addCase(getUserLessonByUrl.fulfilled, () => ({ status: 'succeeded' }))
      .addCase(getUserLessonByUrl.rejected, () => ({ status: 'failed' }))
  }
)
