import { createSelector } from '@reduxjs/toolkit/react';
import IApplicationState from '../IApplicationState';

const chatInputSelectorFields = {
    userInput: createSelector(
        (state: IApplicationState) => state.chatInput.text,
        text => text
    )
};

const chatInputSelector = () => chatInputSelectorFields;
export default chatInputSelector;
