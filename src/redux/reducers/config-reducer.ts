import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TConfig } from '../../common/types';

const initialState: TConfig = {
  participantsCount: 0,
  prizeConfig: [],
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setParticipantsCount(state, action: PayloadAction<number>) {
      state.participantsCount = action.payload;
    },
    setPrizeConfig(state, action: PayloadAction<TConfig['prizeConfig']>) {
      state.prizeConfig = action.payload;
    },
  },
});

export const { setParticipantsCount, setPrizeConfig } = configSlice.actions;

export default configSlice.reducer;
