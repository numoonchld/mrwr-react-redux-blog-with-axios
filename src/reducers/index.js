import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

// starter reducer
// const dummy = () => `hello world!`;

export default combineReducers({ posts: postsReducer, users: usersReducer });
