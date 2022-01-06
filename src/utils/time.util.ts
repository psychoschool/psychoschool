import humanizeDuration from 'humanize-duration'

export const displayTime = (duration: number) =>
  humanizeDuration(duration * 1000, {
    units: ['h', 'm'],
    language: 'ru',
    round: true
  })
