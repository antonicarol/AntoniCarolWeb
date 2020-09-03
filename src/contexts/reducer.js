export const initialState = {
  user: null,
  projects: [],
  detailProject: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_PROJECTS: "SET_PROJECTS",
  SET_DETAIL_PROJECT: "SET_DETAIL_PROJECT",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.SET_PROJECTS:
      return {
        ...state,
        projects: action.projects,
      };

    case actionTypes.SET_DETAIL_PROJECT:
      return {
        ...state,
        detailProject: action.detailProject,
      };

    default:
      return state;
  }
};

export default reducer;
