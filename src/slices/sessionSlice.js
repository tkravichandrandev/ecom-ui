import { createSlice } from "@reduxjs/toolkit";
const sessionSlice = createSlice({
  name: "session",
  initialState: {
    users: [
      {
        name: "Ravichandran TK",
        email: "ravichandran@gmail.com",
        password: "123456",
        id: 1,
      },
    ],
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action?.payload;
    },

    logout: (state) => {
      state.user = null;
    },
  },
});
export const { login, logout } = sessionSlice.actions;
export default sessionSlice.reducer;
