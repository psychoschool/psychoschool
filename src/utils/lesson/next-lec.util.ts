import { Lesson } from 'entities/lessons/lessons.types'

export const getNextLec = (lesson: Lesson) => {
  const { completedLectures, course } = lesson
  const { sections } = course
  let nextLec = sections[0].lectures[0]

  if (!completedLectures.length) {
    return nextLec
  }

  const lastWatched = completedLectures[completedLectures.length - 1]

  for (let s = 0; s < sections.length; s++) {
    for (let l = 0; l < sections[s].lectures.length; l++) {
      const { lectures } = sections[s]

      if (lastWatched === lectures[l].id) {
        if (s === sections.length - 1 && l === sections[s].lectures.length - 1) {
          nextLec = sections[0].lectures[0]
          return nextLec
        }

        if (s < sections.length - 1 && l === sections[s].lectures.length - 1) {
          nextLec = sections[s + 1].lectures[0]
          return nextLec
        }
        nextLec = lectures[l + 1]
        return nextLec
      }
    }
  }

  return nextLec
}
