import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,  // 초기 상태값
    reducers: {
        increment: (state) => {  // 초기 상태값을 가지고 와서
            state.count += 1  // 초기 상태값의 숫자를 1 증가시킴
        },
        decrement: (state) => {
            state.count -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer