import React, { FC } from 'react'
import { Player } from 'ui-kit/player'
import type { Lecture } from 'resources/types'
import type { Lesson } from 'entities/lessons/lessons.types'
import { useLessonActions } from 'entities/lessons/lessons.slice'
import { useAppDispatch } from 'utils/store.util'
import { getNextLec } from 'utils/lesson'

interface Props {
  lesson: Lesson
  lecture: Lecture
  onChange: (lecture: Lecture) => void
}
export const Sandbox: FC<Props> = ({ lecture, lesson, onChange }) => {
  const { type, video } = lecture
  const dispatch = useAppDispatch()
  const { updateLesson } = useLessonActions(dispatch)

  const handleComplete = () => {
    if (!lesson.completedLectures.includes(lecture.id)) {
      const completedLectures = [...lesson.completedLectures, lecture.id]
      const nextLec = getNextLec({ ...lesson, completedLectures })

      updateLesson({ id: lesson.id, completedLectures })
      onChange(nextLec)
    } else {
      onChange(getNextLec(lesson))
    }
  }

  if (type !== 'video' || !video) return null

  return <Player url={video.videoUrl} provider={video.provider} duration={video.duration} onEnded={handleComplete} />
}
