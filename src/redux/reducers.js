import { createSlice } from "@reduxjs/toolkit";

export const choiceSlice = createSlice({
    name: "choice",
    initialState: {
    header: "create",
    modale: "false",
    dropdown:"departments",
    dropdownStateSelection: "",
    dropdownDepartmentSelection: "",
    newEmployee: [{
        firstName: "",
        lastName: "",
        startDate: "",
        department: "",
        dateOfBirth: "",
        street: "",
        city: "",
        state: "",
        zipCode: ""
    }
    ]
    },

    reducers: {
        choiceHeader: (state, action) => {
            state.header = action.payload;
        },

        choiceModale: (state, action) => {
            state.modale = action.payload;
        },

        choiceDropdown: (state, action) => {
            state.dropdown = action.payload;
        },

        choiceDropdownStateSelection: (state, action) => {
            state.dropdownStateSelection = action.payload
        },

        choiceDropdownDepartmentSelection: (state, action) => {
            state.dropdownDepartmentSelection = action.payload
        },

        choiceNewEmployee: (state, action) => {
            state.newEmployee.unshift(action.payload)
        }        
    },
});

export const {choiceHeader, choiceDropdown, choiceDropdownStateSelection, choiceDropdownDepartmentSelection, choiceNewEmployee, choiceModale} = choiceSlice.actions;

export const choiceReducer =choiceSlice.reducer
