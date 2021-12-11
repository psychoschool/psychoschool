import { useContext } from 'react'
import { v4 as uuid } from 'uuid'
import { SnackBarContext, SnackProps } from 'ui-kit/snackbar'

export const useSnackbar = () => {
  const dispatch = useContext(SnackBarContext)
  const enqueueSnackbar = (message: string, type: SnackProps['type'] = 'default') => {
    dispatch({
      type: 'ADD',
      payload: { id: uuid(), message, type }
    })
  }

  return { enqueueSnackbar }
}
