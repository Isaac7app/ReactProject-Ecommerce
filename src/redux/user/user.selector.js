import { createSelector } from 'reselect';

const seletcUser = state => state.user;

export const selectCurrentUser = createSelector(
   [seletcUser],
    (user) => user.currentUser
)