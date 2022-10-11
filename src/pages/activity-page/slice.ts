import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store'
import { LoginState } from './type'

const initialState: LoginState = {
  dataList: []
}

export const ActivityPageSlice = createSlice({
  name: 'loginState',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<{ key: string; value: unknown }>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value
    }
  }
})

export const { setState } = ActivityPageSlice.actions

export default ActivityPageSlice.reducer
