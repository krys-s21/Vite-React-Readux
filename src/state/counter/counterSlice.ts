import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "../../../node_modules/@reduxjs/toolkit/dist/createAction";

interface CounterState{
    value: number;
}
const initialState: CounterState ={
    value:0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action:Payload<number>) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(incrementAsync.pending, () => {
            console.log("incrementAsync.pending");
        })
        .addCase(
            incrementAsync.fulfilled, 
            (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        });
    },
});

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
)
export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;