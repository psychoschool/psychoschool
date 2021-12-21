import { lessonsCollectionReducer, lessonReducer } from './lessons.slice'

export default {
  collections: {
    lessons: lessonsCollectionReducer
  },
  lesson: lessonReducer
}
