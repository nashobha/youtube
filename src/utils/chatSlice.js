import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../utils/constants";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            if (state.messages.length >= LIVE_CHAT_COUNT) {
                state.messages.shift(); // Remove the oldest (first) message
            }
            state.messages.push(action.payload);
        }
    }
})

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
