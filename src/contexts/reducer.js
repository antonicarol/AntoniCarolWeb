export const initialState = {
  projects: [],
  detailProject: null,
  path: "",
};

export const actionTypes = {
  SET_PROJECTS: "SET_PROJECTS",
  SET_DETAIL_PROJECT: "SET_DETAIL_PROJECT",
  SET_LOCATION: "SET_LOCATION",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_LOCATION:
      return {
        ...state,
        path: action.location,
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
