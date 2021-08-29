import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const loadPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(loadPosts());
  /* GET ALL THE UNIQUE USER IDs USING LODASH LIBRARY */
  /** THEN CALL ALL USER ACTION CREATOR FOR ALL THE UNIQUE USER IDs */

  /* REGULAR IMPLEMENTATION */
  // const userIDs = _.uniq(_.map(getState().posts, "userId"));
  // userIDs.forEach((userID) => dispatch(fetchUser(userID)));

  /* LODASH CHAINING */
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((userID) => dispatch(fetchUser(userID)))
    .value();
};

export const loadPosts = () => async (dispatch) => {
  const { data } = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "LOAD_POSTS",
    payload: data
  });
};

export const fetchUser = (userID) => async (dispatch) => {
  const { data } = await jsonPlaceholder.get(`/users/${userID}`);
  dispatch({
    type: "FETCH_USER",
    payload: data
  });
};

/* MEMOIZED ACTION CREATOR */
// export const fetchUser = (userID) => (dispatch) => _fetchUser(userID, dispatch);

// const _fetchUser = _.memoize(async (userID, dispatch) => {
//   const { data } = await jsonPlaceholder.get(`/users/${userID}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: data
//   });
// });
