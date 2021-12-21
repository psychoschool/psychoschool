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
  onSuccess: (response: Array<LessonResponse>) => normalizeLessons(response),
  onError: error => error
}))

export const getUserLessonsByUrl = resource((ctx, { userId, url }: GetLessonReqParams) => ({
  ctx,
  name: 'getUserLessonsByUrl',
  method: 'GET',
  serviceName: PSYCHO_API,
  url: `/lessons/user/${userId}`,
  params: { url },
  onSuccess: (response: LessonResponse) => normalizeLesson(response),
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
    url: params.url,
    paidPlan: params.paidPlan
  },
  onSuccess: (response: Array<LessonResponse>) => {
    params.onSuccess()
    return normalizeLessons(response)
  },
  onError: error => error
}))
