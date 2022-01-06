export const pluralize = (num: number | string, [one, two, five]: string[]) => {
  let value = num

  if (value === '' || value === null) {
    return ''
  }

  value = Number(value)

  if (Number.isNaN(value)) {
    return ''
  }

  value %= 100

  if (value >= 5 && value <= 20) {
    return five
  }

  value %= 10

  if (value === 1) {
    return one
  }

  if (value >= 2 && value <= 4) {
    return two
  }

  return five
}
