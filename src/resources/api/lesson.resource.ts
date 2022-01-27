import { resource } from 'utils/resource.util'
import { PSYCHO_API } from 'config/services'
import { AddLessonParam, GetLessonReqParams, LessonResponse } from 'resources/types'
import { normalizeLesson, normalizeLessons } from 'schemas/lesson.schema'

export const getUserLessons = resource((ctx, id: string) => ({
  ctx,
  name: 'getUserLessons',
  method: 'GET',
  serviceName: PSYCHO_API,
  url: `/lessons/user/${id}`,
  onSuccess: (response: Response<Array<LessonResponse>>) => normalizeLessons(response.result),
  onError: error => error
}))

export const getUserLessonBySlug = resource((ctx, { userId, slug }: GetLessonReqParams) => ({
  ctx,
  name: 'getUserLessonBySlug',
  method: 'GET',
  serviceName: PSYCHO_API,
  url: `/lessons/user/${userId}`,
  params: { slug },
  onSuccess: (response: Response<Nullable<LessonResponse>>) => {
    if (!response.result) return null
    return normalizeLesson(response.result)
  },
  onError: error => error
}))

export const addLesson = resource((ctx, params: AddLessonParam) => ({
  ctx,
  name: 'addLesson',
  method: 'POST',
  serviceName: PSYCHO_API,
  url: '/lessons',
  data: {
    course: params.courseId,
    user: params.userId,
    slug: params.slug,
    price: params.price
  },
  onSuccess: (response: Response<Nullable<Array<LessonResponse>>>) => {
    params.onSuccess()
    if (!response.result) return null
    return normalizeLessons(response.result)
  },
  onError: error => error
}))

export const updateLesson = resource((ctx, { id, ...data }: Partial<LessonResponse>) => ({
  ctx,
  name: 'updateLesson',
  method: 'PUT',
  serviceName: PSYCHO_API,
  url: `/lessons/${id}`,
  data,
  onSuccess: (response: Response<Nullable<LessonResponse>>) => {
    if (!response.result) return null
    return normalizeLesson(response.result)
  },
  onError: error => error
}))
