import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import loadable from '@loadable/component'
import _throttle from 'lodash.throttle'

import { useAppDispatch } from 'utils/store.util'
import { useScreenActions } from 'entities/ui/ui.actions'
import { Drawer } from 'components/@shared/drawer'
import './styles.scss'

const HomePage = loadable(() => import('pages/home'))
const NotFoundPage = loadable(() => import('pages/not-found'))

export const App = () => {
  const dispatch = useAppDispatch()
  const { changeScreen } = useScreenActions(dispatch)

  useEffect(() => {
    addEventListener('resize', _throttle(changeScreen, 500))
    changeScreen()
  }, [changeScreen])

  return (
    <>
      <Routes>
        <Route path='/' element={<Drawer />}>
          <Route index element={<HomePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
