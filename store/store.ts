import { configureStore } from '@reduxjs/toolkit'
import answerApiReducer from './ApiResponse/state'
import chatInput from './inputText/state'

export const store = configureStore({
    reducer: { answers: answerApiReducer, chatInput: chatInput },
})

export type RootState = ReturnType<typeof store.getState>
export type UseAppDispatch = typeof store.dispatch