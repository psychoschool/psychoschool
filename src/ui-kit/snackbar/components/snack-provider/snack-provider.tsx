import React, { FC, Dispatch, createContext, useReducer } from 'react'
import { Snack, SnackProps } from '../snack'
import { SnackAction, SnackBarProps } from './types'
import { getClassNames } from './utils/cn.util'

export const SnackBarContext = createContext<Dispatch<SnackAction>>(() => {})
export const SnackProvider: FC<SnackBarProps> = props => {
  const { children } = props
  const className = getClassNames(props)
  const [state, dispatch] = useReducer((state: Array<SnackProps>, action: SnackAction) => {
    switch (action.type) {
      case 'ADD':
        return [...state, { ...action.payload }]
      case 'REMOVE':
        return state.filter(s => s.id !== action.payload.id)
      default:
        return state
    }
  }, [])

  const removeSnack = (payload: SnackProps) => {
    dispatch({ type: 'REMOVE', payload })
  }

  return (
    <SnackBarContext.Provider value={dispatch}>
      <div className={className}>
        {state.map(snack => (
          <Snack onClose={removeSnack} key={snack.id} {...snack} />
        ))}
      </div>
      {children}
    </SnackBarContext.Provider>
  )
}

SnackProvider.defaultProps = {
  maxSnack: 3,
  anchorOrigin: {
    horizontal: 'right',
    vertical: 'top'
  }
}
