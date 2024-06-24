import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});
//const res = await fetch('https://jsonplaceholder.typicode.com/users');
//getUsers関数の中でdispatchにAction CreatorsのsetUsersを指定
「」

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;