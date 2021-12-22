import { getIndex } from 'utils/lesson'
import { Course } from 'entities/courses/courses.types'

const mockLesson = {
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
} as unknown as Course

describe('getIndex.util', () => {
  it('should return 0 0', () => {
    const res = getIndex('1', mockLesson)

    expect(res.sectionIndex).toBe(0)
    expect(res.lectureIndex).toBe(0)
  })

  it('should return 1 3', () => {
    const res = getIndex('8', mockLesson)

    expect(res.sectionIndex).toBe(1)
    expect(res.lectureIndex).toBe(3)
  })

  it('should return 1 0', () => {
    const res = getIndex('5', mockLesson)

    expect(res.sectionIndex).toBe(1)
    expect(res.lectureIndex).toBe(0)
  })

  it('should return 0 0 if id is invalid', () => {
    const res = getIndex('test', mockLesson)

    expect(res.sectionIndex).toBe(0)
    expect(res.lectureIndex).toBe(0)
  })

  it('should return 0 0 if id is undefined', () => {
    const res = getIndex(undefined, mockLesson)

    expect(res.sectionIndex).toBe(0)
    expect(res.lectureIndex).toBe(0)
  })
})
