import { configureStore } from '@reduxjs/toolkit'
import answerApiReducer from './ApiResponse/state'

export const store = configureStore({
    reducer: { answers: answerApiReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type UseAppDispatch = typeof store.dispatch