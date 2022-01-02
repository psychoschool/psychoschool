import { Course } from 'entities/courses/courses.types'

export const getIndex = (lecId = '', course: Course) => {
  const { sections } = course
  let sectionIndex = 0
  let lectureIndex = 0

  for (let s = 0; s < sections.length; s++) {
    for (let l = 0; l < sections[s].lectures.length; l++) {
      if (lecId === sections[s].lectures[l].id) {
        sectionIndex = s
        lectureIndex = l
      }
    }
  }

  return { sectionIndex, lectureIndex }
}
