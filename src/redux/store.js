import { configureStore } from "@reduxjs/toolkit";
import { choiceReducer } from "./reducers";

export const store= configureStore({
 reducer: {
         choice: choiceReducer
}
});