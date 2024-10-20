import { IResponseProps } from '@/app/api/open-ai';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: IResponseProps = {
    choices: []

};

export const answerApiSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        answerResponse: (state, action: PayloadAction<IResponseProps>) => {
            state.choices = [...state.choices, ...action.payload.choices];
        },
    },
});

// Action creators
export const answerApiActions = () => answerApiSlice.actions;

export default answerApiSlice.reducer;
