import { useMemo } from 'react'
import { bindActionCreators, createAsyncThunk, createReducer, Dispatch } from '@reduxjs/toolkit'
import * as lessonResource from 'api/lesson.resource'
import { Lesson, LessonsCollection } from './lessons.types'
import { AddLessonParam, GetLessonReqParams, LessonResponse } from 'resources/types'
import { signOut } from 'entities/auth/auth.actions'

/*--------------------------------------------------
  actions
  -------------------------------------------------- */
export const getUserLessons = createAsyncThunk('lessons/getUserLessons', (id: string) => {
  return lessonResource.getUserLessons({}, id)
})

export const getUserLessonBySlug = createAsyncThunk('lessons/getUserLessonBySlug', (params: GetLessonReqParams) => {
  return lessonResource.getUserLessonBySlug({}, params)
})

export const addLesson = createAsyncThunk('lessons/addLesson', (params: AddLessonParam) => {
  return lessonResource.addLesson({}, params)
})

export const updateLesson = createAsyncThunk('lessons/updateLesson', (params: Partial<LessonResponse>) => {
  return lessonResource.updateLesson({}, params)
})

/*--------------------------------------------------
  dispatch actions
  -------------------------------------------------- */
export const useLessonActions = (dispatch: Dispatch) => {
  return useMemo(
    () => bindActionCreators({ getUserLessons, getUserLessonBySlug, addLesson, updateLesson }, dispatch),
    [dispatch]
  )
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
  builder
    .addCase(getUserLessonBySlug.fulfilled, (state, action) => ({ data: action.payload }))
    .addCase(updateLesson.fulfilled, (state, action) => ({ data: action.payload }))
    .addCase(signOut.fulfilled, (state, action) => ({ data: null }))
})

export const lessonMetaReducer = createReducer<{ status: 'succeeded' | 'pending' | 'failed' }>(
  { status: 'pending' },
  builder => {
    builder
      .addCase(getUserLessonBySlug.pending, () => ({ status: 'pending' }))
      .addCase(getUserLessonBySlug.fulfilled, () => ({ status: 'succeeded' }))
      .addCase(getUserLessonBySlug.rejected, () => ({ status: 'failed' }))
      .addCase(updateLesson.pending, () => ({ status: 'pending' }))
      .addCase(updateLesson.fulfilled, () => ({ status: 'succeeded' }))
      .addCase(updateLesson.rejected, () => ({ status: 'failed' }))
  }
)
