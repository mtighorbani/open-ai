import { createSelector } from '@reduxjs/toolkit/react';
import IApplicationState from '../IApplicationState';

const answerResponseSelectorFields = {
    answerContent: createSelector(
        (state: IApplicationState) => state.answers?.choices,
        choices => choices
    )
};

const answerResponseSelector = () => answerResponseSelectorFields;
export default answerResponseSelector;
