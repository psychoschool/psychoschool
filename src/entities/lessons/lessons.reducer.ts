import { lessonsCollectionReducer, lessonReducer, lessonMetaReducer } from './lessons.slice'

export default {
  collections: {
    lessons: lessonsCollectionReducer
  },
  lesson: lessonReducer,
  meta: {
    lesson: lessonMetaReducer
  }
}
