import { resource } from 'utils/resource.util'
import { PSYCHO_API } from 'config/services'
import { CourseResponse } from 'resources/types'
import { normalizeCourse, normalizeCourses } from 'schemas/course.schema'

export const getCourses = resource(ctx => ({
  ctx,
  name: 'getCourses',
  method: 'GET',
  serviceName: PSYCHO_API,
  url: '/courses',
  onSuccess: (response: Response<Array<CourseResponse>>) => normalizeCourses(response.data),
  onError: error => error
}))

export const getCourseById = resource((ctx, id: string) => ({
  ctx,
  name: 'getCourseById',
  method: 'GET',
  serviceName: PSYCHO_API,
  url: `/courses/${id}`,
  onSuccess: (response: Response<CourseResponse>) => normalizeCourse(response.data),
  onError: error => error
}))

export const getCourseByUrl = resource((ctx, url: string) => ({
  ctx,
  name: 'getCourseByUrl',
  method: 'GET',
  serviceName: PSYCHO_API,
  url: '/courses',
  params: { url },
  onSuccess: (response: Response<CourseResponse>) => normalizeCourse(response.data),
  onError: error => error
}))
