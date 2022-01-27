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
  onSuccess: (response: Response<Array<CourseResponse>>) => normalizeCourses(response.result),
  onError: error => error
}))

export const getCourseById = resource((ctx, id: string) => ({
  ctx,
  name: 'getCourseById',
  method: 'GET',
  serviceName: PSYCHO_API,
  url: `/courses/${id}`,
  onSuccess: (response: Response<Nullable<CourseResponse>>) => {
    if (!response.result) return null
    return normalizeCourse(response.result)
  },
  onError: error => error
}))

export const getCourseBySlug = resource((ctx, slug: string) => ({
  ctx,
  name: 'getCourseBySlug',
  method: 'GET',
  serviceName: PSYCHO_API,
  url: '/courses',
  params: { slug },
  onSuccess: (response: Response<Nullable<CourseResponse>>) => {
    if (!response.result) return null
    return normalizeCourse(response.result)
  },
  onError: error => error
}))
