import { completedUtil } from '../completed.util'

describe('completed.util', () => {
  it('should add item to arr', () => {
    const arr = ['1', '2', '3', '4', '5']
    const expected = completedUtil(arr, '6', true)

    expect(expected).toEqual(['1', '2', '3', '4', '5', '6'])
  })

  it('should remove item from arr', () => {
    const arr = ['1', '2', '3', '4', '5']
    const expected = completedUtil(arr, '5', false)

    expect(expected).toEqual(['1', '2', '3', '4'])
  })

  it('should return the same arr', () => {
    const arr = ['1', '2', '3', '4', '5']
    const expected = completedUtil(arr, '5', true)

    expect(expected).toEqual(arr)
  })

  it('should return the same arr when id out of range', () => {
    const arr = ['1', '2', '3', '4', '5']
    const expected = completedUtil(arr, '6', false)

    expect(expected).toEqual(arr)
  })
})
