import { RootState } from 'store/index'

export const selectCourses = (state: RootState) => state.collections.courses

export const selectCourse = (state: RootState) => state.course.data
