export const completedUtil = (initialArr: Array<string>, id: string, value: boolean): Array<string> => {
  const index = initialArr.indexOf(id)
  const completed = [...initialArr]

  if (value) {
    if (index === -1) completed.push(id)
  } else {
    if (index !== -1) completed.splice(index, 1)
  }

  return completed
}
