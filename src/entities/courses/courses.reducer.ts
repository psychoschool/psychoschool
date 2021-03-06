import { courseMetaReducer, courseReducer, coursesCollectionReducer } from 'entities/courses/courses.slice'

export default {
  collections: {
    courses: coursesCollectionReducer
  },
  course: courseReducer,
  meta: {
    course: courseMetaReducer
  }
}
