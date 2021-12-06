import { configureStore } from '@reduxjs/toolkit'
import { createReduxHistoryContext } from 'redux-first-history'
import { createBrowserHistory } from 'history'

import { createRootReducer } from 'store/rootReducer'
import { logger } from 'utils/logger.util'
import { exampleApi } from 'entities/example/example.api'

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory()
})

export const store = configureStore({
  reducer: createRootReducer(routerReducer),
  devTools: IS_DEV,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([routerMiddleware, exampleApi.middleware, logger])
})

if (IS_DEV && module.hot) {
  module.hot.accept('./rootReducer', () => {
    store.replaceReducer(require('./rootReducer').createRootReducer)
  })
}

export const history = createReduxHistory(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
