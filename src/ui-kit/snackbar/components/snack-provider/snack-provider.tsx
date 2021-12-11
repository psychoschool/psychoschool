import React, { FC, useReducer } from 'react'
import { v4 as uuid } from 'uuid'
import { Snack, SnackProps } from '../snack'
import { getClassNames } from './utils/cn.util'
import { SnackBarProps } from './types'

const snacks: Array<SnackProps> = [
  { id: uuid(), message: 'First notice' },
  { id: uuid(), message: '2 notice' }
]

interface Action {
  type: 'ADD' | 'REMOVE'
  payload: SnackProps
}
export const SnackProvider: FC<SnackBarProps> = props => {
  const { children } = props
  const [state, dispatch] = useReducer((state: Array<SnackProps>, action: Action) => {
    switch (action.type) {
      case 'ADD':
        return [...state, { ...action.payload }]
      case 'REMOVE':
        return state.filter(s => s.id !== action.payload.id)
      default:
        return state
    }
  }, snacks)

  const removeSnack = (payload: SnackProps) => {
    dispatch({ type: 'REMOVE', payload })
  }

  const className = getClassNames(props)
  return (
    <div>
      <div className={className}>
        {state.map(snack => (
          <Snack onClose={removeSnack} key={snack.id} {...snack} />
        ))}
      </div>
      {children}
    </div>
  )
}

SnackProvider.defaultProps = {
  maxSnack: 3,
  placement: 'bottom',
  align: 'right'
}
