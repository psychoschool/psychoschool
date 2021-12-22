import { RootState } from 'store/index'

export const selectLessons = (state: RootState) => state.collections.lessons
export const selectLesson = (state: RootState) => state.lesson.data
export const selectLessonMeta = (state: RootState) => state.meta.lesson
