import { createSlice } from "@reduxjs/toolkit";

export const choiceSlice = createSlice({
    name: "choice",
    initialState: {
    header: "create",
    dropdown:"departments",
    dropdownStateSelection: "coucou",
    dropdownDepartmentSelection: "oupsssss",
    newEmployee: [{
        firstName: 1,
        lastName: 2,
        startDate: "",
        department: "",
        dateOfBirth: "",
        street: 3,
        city: 4,
        state: "",
        zipCode: ""
    }
    ]
    },

    reducers: {
        choiceHeader: (state, action) => {
            state.header = action.payload;
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
    
            console.log(action.payload)
            // console.log(state.newEmployee)  
        }        
    },
});

export const {choiceHeader, choiceDropdown, choiceDropdownStateSelection, choiceDropdownDepartmentSelection, choiceNewEmployee} = choiceSlice.actions;

export const choiceReducer =choiceSlice.reducer
