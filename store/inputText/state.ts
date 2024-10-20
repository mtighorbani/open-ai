import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ChatInputProps {
    text: string
}

const initialState: ChatInputProps = {
    text: ''
};

export const chatInputSlice = createSlice({
    name: 'inputs',
    initialState,
    reducers: {
        chatInput: (state, action: PayloadAction<ChatInputProps>) => {
            state.text = action.payload.text;
        },
    },
});

// Action creators
export const chatInputActions = () => chatInputSlice.actions;

export default chatInputSlice.reducer;
