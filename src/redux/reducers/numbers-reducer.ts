import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TNumberData } from '../../common/types';

const initialState: TNumberData[] = [];

const numbersSlice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    setNumberPrizeType(state, action: PayloadAction<TNumberData>) {
      const fountIndex = state.findIndex((item) => item.value === action.payload.value);
      if (fountIndex >= 0) state[fountIndex] = action.payload;
    },
  },
});

export const { setNumberPrizeType } = numbersSlice.actions;

export default numbersSlice.reducer;
