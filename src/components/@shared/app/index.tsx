import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import loadable from '@loadable/component'
import _throttle from 'lodash.throttle'

import { ThemeProvider, useThemeCreator } from 'utils/theme'
import { useAppDispatch } from 'utils/store.util'
import { useScreenActions } from 'entities/ui/ui.actions'
import { Drawer } from 'components/@shared/drawer'
import { Login, Signup } from 'components/auth'
import './styles.scss'

const HomePage = loadable(() => import('pages/home'))
const AuthPage = loadable(() => import('pages/auth'))
const NotFoundPage = loadable(() => import('pages/not-found'))

export const App = () => {
  const dispatch = useAppDispatch()
  const { changeScreen } = useScreenActions(dispatch)
  const theme = useThemeCreator()

  useEffect(() => {
    addEventListener('resize', _throttle(changeScreen, 500))
    changeScreen()
  }, [changeScreen])

  return (
    <>
      <ThemeProvider value={theme}>
        <Routes>
          <Route path='/' element={<Drawer />}>
            <Route index element={<HomePage />} />

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
