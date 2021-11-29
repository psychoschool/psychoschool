import { RequirementsCollection } from 'entities/courses/courses.type'

export const isReadyToStart = (requirements: RequirementsCollection) =>
  Object.values(requirements).every(value => value)
