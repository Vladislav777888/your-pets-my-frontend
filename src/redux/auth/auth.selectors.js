export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRegestration = state => state.auth.isRegestration;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectAuthStatus = state => state.auth.status;
