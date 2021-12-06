import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit'
import { RouterState } from 'redux-first-history'

import uiReducer from 'entities/ui/ui.reducer'
import { exampleApi } from 'entities/example/example.api'
import authReducer from 'entities/auth/auth.reducer'
import userReducer from 'entities/user/user.reducer'

export const createRootReducer = (routerReducer: Reducer<RouterState, AnyAction>) =>
  combineReducers({
    router: routerReducer,
    auth: authReducer,
    user: userReducer,
    [exampleApi.reducerPath]: exampleApi.reducer,
    ui: uiReducer
  })
