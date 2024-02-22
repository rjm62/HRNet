import { createSlice } from "@reduxjs/toolkit";

export const choiceSlice = createSlice({
    name: "choice",
    initialState: {
    header: "create",
    dropdown:"departments",
    selection: ""
    },

    reducers: {
        choiceHeader: (state, action) => {
            state.header = action.payload;
        },

        choiceDropdown: (state, action) => {
            state.dropdown = action.payload;
        },

        choiceDropdownSelection: (state, action) => {
            state.selection = action.payload
        }
    },
});

export const {choiceHeader, choiceDropdown, choiceDropdownSelection} = choiceSlice.actions;

export const choiceReducer =choiceSlice.reducer
