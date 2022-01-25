import { v4 as uuid } from 'uuid'
import { createAction, createReducer } from '@reduxjs/toolkit'
import { signIn, signUp, forgot, reset } from 'entities/auth/auth.actions'
import type { SnackProps } from 'ui-kit/snackbar'
import type { SnacksCollection } from './snacks.type'

/*--------------------------------------------------
  actions
  -------------------------------------------------- */
export const removeSnack = createAction<string>('ui.remove-snack')
export const createSnack = createAction<Omit<SnackProps, 'id'>>('ui.create-snack')

/*--------------------------------------------------
  reducers
  -------------------------------------------------- */
export const snackReducer = createReducer<SnacksCollection>({} as SnacksCollection, builder => {
  builder
    .addCase(signUp.rejected, (state, { error }) => {
      const id = uuid()
      state[id] = { id, variant: 'error', message: 'Пользователь с таким email уже существует' }
    })
    .addCase(signIn.rejected, (state, { error }) => {
      const id = uuid()
      state[id] = { id, variant: 'error', message: 'Неверное имя пользователя или пароль' }
    })
    .addCase(forgot.fulfilled, state => {
      const id = uuid()
      state[id] = { id, variant: 'default', message: 'Письмо с востановлением отправленно на почту' }
    })
    .addCase(reset.fulfilled, state => {
      const id = uuid()
      state[id] = { id, variant: 'default', message: 'Пароль успешно обнавлен' }
    })
    .addCase(createSnack, (state, action) => {
      const { message, variant, autoHideDuration } = action.payload
      const id = uuid()
      state[id] = { id, message, variant, autoHideDuration }
    })
    .addCase(removeSnack, (state, action) => {
      const id = action.payload
      delete state[id]
    })
})
