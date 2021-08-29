export default (state = [], action) => {
  switch (action.type) {
    case "LOAD_POSTS":
      return action.payload;
    default:
      return state;
  }
};
