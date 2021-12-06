import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import loadable from '@loadable/component'
import _throttle from 'lodash.throttle'

import { ThemeProvider, useThemeCreator } from 'utils/theme'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { useScreenActions } from 'entities/ui/ui.actions'
import { selectAuth } from 'entities/auth/auth.selector'
import { selectCurrentUser } from 'entities/user/user.selector'
import { useUserActions } from 'entities/user/user.slice'
import { Drawer } from 'components/@shared/drawer'
import { Login, Signup } from 'components/auth'
import './styles.scss'

const AuthPage = loadable(() => import('pages/auth'))
const HomePage = loadable(() => import('pages/home'))
const CoursePage = loadable(() => import('pages/course'))
const NotFoundPage = loadable(() => import('pages/not-found'))

export const App = () => {
  const dispatch = useAppDispatch()
  const { changeScreen } = useScreenActions(dispatch)
  const theme = useThemeCreator()

  const { getCurrentUser } = useUserActions(dispatch)
  const { authorized } = useAppSelector(selectAuth)
  const user = useAppSelector(selectCurrentUser)

  useEffect(() => {
    addEventListener('resize', _throttle(changeScreen, 500))
    changeScreen()
  }, [changeScreen])

  useEffect(() => {
    if (!user) getCurrentUser()
  }, [user, authorized, getCurrentUser])

  return (
    <>
      <ThemeProvider value={theme}>
        <Routes>
          <Route path='/' element={<Drawer />}>
            <Route index element={<HomePage />} />

            <Route path='course/:courseId' element={<CoursePage />} />

            <Route element={<AuthPage />}>
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
            </Route>

            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}
