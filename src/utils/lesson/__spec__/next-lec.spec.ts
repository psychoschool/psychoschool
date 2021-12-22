import { getNextLec } from 'utils/lesson'
import { Lesson } from 'entities/lessons/lessons.types'

export const mockLesson = (completedLectures: Array<string>) =>
  ({
    course: {
      sections: [
        {
          lectures: [
            { id: '1', name: '1 lec' },
            { id: '2', name: '2 lec' },
            { id: '3', name: '3 lec' },
            { id: '4', name: '4 lec' }
          ]
        },
        {
          lectures: [
            { id: '5', name: '5 lec' },
            { id: '6', name: '6 lec' },
            { id: '7', name: '7 lec' },
            { id: '8', name: '8 lec' }
          ]
        }
      ]
    },
    completedLectures
  } as unknown as Lesson)

describe('nextLec.util', () => {
  describe('should return first Lec', () => {
    it('empty completed arr', () => {
      const lesson = mockLesson([])
      const next = getNextLec(lesson)
      const expected = { id: '1', name: '1 lec' }

      expect(next).toMatchObject(expected)
    })

    it('invalid id in completed arr', () => {
      const lesson = mockLesson(['test'])
      const next = getNextLec(lesson)
      const expected = { id: '1', name: '1 lec' }

      expect(next).toMatchObject(expected)
    })
  })

  describe('should return next lec', () => {
    it('if next lex exist', () => {
      const lesson = mockLesson(['1'])
      const next = getNextLec(lesson)
      const expected = { id: '2', name: '2 lec' }

      expect(next).toMatchObject(expected)
    })

    it('if next lec in next section', () => {
      const lesson = mockLesson(['4'])
      const next = getNextLec(lesson)
      const expected = { id: '5', name: '5 lec' }

      expect(next).toMatchObject(expected)
    })

    it('if next lec in gap', () => {
      const lesson = mockLesson(['4', '6'])
      const next = getNextLec(lesson)
      const expected = { id: '7', name: '7 lec' }

      expect(next).toMatchObject(expected)
    })
  })
})
