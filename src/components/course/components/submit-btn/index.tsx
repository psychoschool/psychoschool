import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'ui-kit/button'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { useLessonActions } from 'entities/lessons/lessons.slice'
import { selectCurrentUser } from 'entities/user/user.selector'
import { Course } from 'entities/courses/courses.types'
import { selectIsDesktop } from 'entities/ui/screen/screen.selector'

interface Props {
  course: Course
}
export const SubmitBtn: FC<Props> = ({ course }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { addLesson } = useLessonActions(dispatch)
  const isDesktop = useAppSelector(selectIsDesktop)
  const user = useAppSelector(selectCurrentUser)
  const size = isDesktop ? 'large' : 'medium'

  const handleSubmit = () => {
    if (!user) {
      navigate('/login')
    } else {
      addLesson({
        userId: user.id,
        courseId: course.id,
        url: course.url,
        paidPlan: '61c1f3d051982502f8e25a8d',
        onSuccess: () => {
          navigate('/')
        }
      })
    }
  }
  return <Button size={size} onClick={handleSubmit} text='Начать курс' fluid />
}
