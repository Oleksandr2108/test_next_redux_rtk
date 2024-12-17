import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserProps {
  user: string | null;
}

const initialState: UserProps = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
  },
});

export const { setSelectUser } = userSlice.actions;

export const selectedUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
