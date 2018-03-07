/**
 * selector
 * Created by tianrenjie on 2017/11/9
 */
import { createSelector } from 'reselect';

export const totalSelector = state => state.reducer;
export const messageSelector = createSelector(totalSelector, reducer => reducer.message);
export const socketSelector = createSelector(totalSelector, reducer => reducer.socket);
