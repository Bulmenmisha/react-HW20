import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'Иван Петров', email: 'ivan.petrov@example.com', city: 'Берлин', age: 28 },
    { id: 2, name: 'Мария Смирнова', email: 'maria.smirnova@example.com', city: 'Мюнхен', age: 24 },
    { id: 3, name: 'Алексей Иванов', email: 'alexey.ivanov@example.com', city: 'Гамбург', age: 31 },
    { id: 4, name: 'Анна Морозова', email: 'anna.morozova@example.com', city: 'Кёльн', age: 26 },
    { id: 5, name: 'Дмитрий Лебедев', email: 'dmitry.lebedev@example.com', city: 'Франкфурт', age: 35 },
  ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // дополнительно: удаление пользователя через useDispatch
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { removeUser } = userSlice.actions;
export default userSlice.reducer;
