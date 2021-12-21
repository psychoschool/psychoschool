import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Home } from 'components/home'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { useCourseActions } from 'entities/courses/courses.slice'
import { useLessonActions } from 'entities/lessons/lessons.slice'
import { selectCurrentUser } from 'entities/user/user.selector'
import { selectAuth } from 'entities/auth/auth.selector'

const HomePage = () => {
  const dispatch = useAppDispatch()
  const { getCourses } = useCourseActions(dispatch)
  const { getUserLessons } = useLessonActions(dispatch)
  const user = useAppSelector(selectCurrentUser)
  const { authorized } = useAppSelector(selectAuth)

  useEffect(() => {
    getCourses()
  }, [getCourses])

  useEffect(() => {
    if (authorized && user) {
      getUserLessons(user.id)
    }
  }, [authorized, user, getCourses, getUserLessons])

  return (
    <>
      <Helmet>
        <title>Главная</title>
      </Helmet>

      <Home />
    </>
  )
}

export default HomePage
