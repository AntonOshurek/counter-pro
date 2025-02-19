//STATE
import { counterInitialState } from './state/counter-state';
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: counterInitialState,

	reducers: {
    increment: ()
  }
});

export default counterSlice;
