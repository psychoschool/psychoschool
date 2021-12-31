import React, { FC } from 'react'
import { Player } from 'ui-kit/player'
import type { Lecture } from 'resources/types'
import { useAppDispatch } from 'utils/store.util'
import { useLessonActions } from 'entities/lessons/lessons.slice'

interface Props {
  lessonId: string
  lecture: Lecture
  completed: Array<string>
}
export const Sandbox: FC<Props> = ({ lessonId, completed, lecture }) => {
  const { type, video } = lecture
  const dispatch = useAppDispatch()
  const { updateLesson } = useLessonActions(dispatch)

  const handleComplete = () => {
    if (!completed.includes(lecture.id)) {
      updateLesson({ id: lessonId, completedLectures: [...completed, lecture.id] })
    }
  }

  if (type !== 'video' || !video) return null

  return <Player url={video.videoUrl} provider={video.provider} onEnded={handleComplete} />
}
