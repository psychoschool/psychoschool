import { pluralize } from 'utils/string.util'

const labels = ['квартира', 'квартиры', 'квартир']

describe('pluralize', () => {
  it('Правильное склонение', () => {
    expect(pluralize(0, labels)).toBe('квартир')
    expect(pluralize(1, labels)).toBe('квартира')
    expect(pluralize(2, labels)).toBe('квартиры')
    expect(pluralize(5, labels)).toBe('квартир')
    expect(pluralize(-10, labels)).toBe('квартир')
  })

  it('Некорректные данные', () => {
    expect(pluralize('', labels)).toBe('')
  })
})
