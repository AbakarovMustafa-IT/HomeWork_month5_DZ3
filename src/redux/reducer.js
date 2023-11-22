import { combineReducers } from "redux";
import titleReducer from "./titleReducer";
import usersReducer from "./usersReducer";
import userReducer from "./userReducer";


export const rootReducer = combineReducers({
  titleReducer,
  usersReducer,
  userReducer
}) 