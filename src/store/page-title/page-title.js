// actions/pageTitleActions.js
export const setPageTitle = (title) => ({
  type: "SET_PAGE_TITLE",
  payload: title,
});

// reducers/pageTitleReducer.js
const initialState = "page.title";

const pageTitleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGE_TITLE":
      return action.payload;
    default:
      return state;
  }
};

export default pageTitleReducer;
