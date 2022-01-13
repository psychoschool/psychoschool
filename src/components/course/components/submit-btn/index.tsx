import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { useLessonActions } from 'entities/lessons/lessons.slice'
import { selectCurrentUser } from 'entities/user/user.selector'
import { Course } from 'entities/courses/courses.types'
import { selectLesson } from 'entities/lessons/lessons.selector'
import { getNextLec } from 'utils/lesson'
import css from './styles.scss'

interface Props {
  course: Course
}
export const SubmitBtn: FC<Props> = ({ course }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const lesson = useAppSelector(selectLesson)
  const { addLesson } = useLessonActions(dispatch)
  const user = useAppSelector(selectCurrentUser)
  const text = lesson ? 'Продолжить курс' : 'Начать курс'

  const handleSubmit = () => {
    if (!user) {
      navigate('/login')
    } else if (lesson) {
      const nextLec = getNextLec(lesson)
      const link = `/course/${lesson.course.url}/learn/${nextLec.id}`
      navigate(link)
    } else {
      addLesson({
        userId: user.id,
        courseId: course.id,
        url: course.url,
        price: course.price.cost,
        onSuccess: () => {
          navigate('/')
        }
      })
    }
  }
  return (
    <button className={css.btn} onClick={handleSubmit}>
      {text}
    </button>
  )
}
