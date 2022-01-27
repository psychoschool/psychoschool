import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import loadable from '@loadable/component'
import _throttle from 'lodash.throttle'

import { ThemeProvider } from 'utils/theme'
import { SnackProvider } from 'ui-kit/snackbar'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { useScreenActions, useSnackActions } from 'entities/ui/ui.actions'
import { selectAuth } from 'entities/auth/auth.selector'
import { selectCurrentUser } from 'entities/user/user.selector'
import { selectSnacksCollection } from 'entities/ui/snacks/snacks.selector'
import { useUserActions } from 'entities/user/user.slice'
import { Drawer } from 'components/@shared/drawer'
import { Login, Signup, Forgot, Reset } from 'components/auth'
import './styles.scss'

const AuthPage = loadable(() => import('pages/auth'))
const HomePage = loadable(() => import('pages/home'))
const CoursePage = loadable(() => import('pages/course'))
const LessonPage = loadable(() => import('pages/lesson'))
const PayPage = loadable(() => import('pages/pay'))
const NotFoundPage = loadable(() => import('pages/not-found'))

export const App = () => {
  const dispatch = useAppDispatch()
  const { changeScreen } = useScreenActions(dispatch)
  const { removeSnack } = useSnackActions(dispatch)
  const snacks = useAppSelector(selectSnacksCollection)
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
      <ThemeProvider>
        <SnackProvider maxSnack={3} snacks={snacks} onRemoveSnack={removeSnack}>
          <Routes>
            <Route path='/' element={<Drawer />}>
              <Route index element={<HomePage />} />

              <Route path='pay' element={<PayPage />} />

              <Route path='course/:slug' element={<CoursePage />} />
              <Route path='course/:slug/learn/:lecId' element={<LessonPage />} />

              <Route element={<AuthPage />}>
                <Route path='login' element={<Login />} />
                <Route path='forgot' element={<Forgot />} />
                <Route path='signup' element={<Signup />} />
                <Route path='reset/:userId/:token' element={<Reset />} />
              </Route>

              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </SnackProvider>
      </ThemeProvider>
    </>
  )
}
