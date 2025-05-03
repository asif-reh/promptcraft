import { createSlice } from '@reduxjs/toolkit';

const promptSlice = createSlice({
  name: 'prompt',
  initialState: {
    userPrompt: '',
    suggestions: [],
  },
  reducers: {
    setPrompt(state, action) {
      state.userPrompt = action.payload;
    },
    setSuggestions(state, action) {
      state.suggestions = action.payload;
    },
  },
});

export const { setPrompt, setSuggestions } = promptSlice.actions;
export default promptSlice.reducer;