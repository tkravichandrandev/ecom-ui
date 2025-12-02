import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(
        (user) => user.name !== action.payload?.name
      );
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
