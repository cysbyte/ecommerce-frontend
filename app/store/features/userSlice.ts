import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
  isAuthenticated: boolean;
}

const initialState: UserState = (() => {
  if (typeof window !== 'undefined') {  // Check if running in browser
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
        return {
          email: decoded.email || '',
          firstName: decoded.firstName || '',
          lastName: decoded.lastName || '',
          picture: decoded.picture || '',
          isAuthenticated: true,
        };
      } catch (error) {
        console.error('Error parsing token:', error);
      }
    }
  }
  return {
    email: '',
    firstName: '',
    lastName: '',
    picture: '',
    isAuthenticated: false,
  };
})();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ email: string; firstName: string; lastName: string; picture: string }>) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.picture = action.payload.picture;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.email = '';
      state.firstName = '';
      state.lastName = '';
      state.picture = '';
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer; 