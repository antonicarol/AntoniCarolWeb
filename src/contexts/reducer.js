export const initialState = {
  user: null,
  projects: [],
  filteredProjects: [],
  detailProject: null,
  selectedFolder: null,
  selectedFramework: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_PROJECTS: "SET_PROJECTS",
  SET_DETAIL_PROJECT: "SET_DETAIL_PROJECT",
  SET_PORTFOLIO_FOLDER: "SET_PORTFOLIO_FOLDER",
  SET_PORTFOLIO_FRAMEWORK: "SET_PORTFOLIO_FRAMEWORK",
  FILTER_PROJECTS: "FILTER_PROJECTS",
};

const reducer = (state, action) => {
  console.log(action, state);
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

    case actionTypes.SET_PORTFOLIO_FOLDER:
      return {
        ...state,
        selectedFolder: action.folder,
      };

    case actionTypes.SET_PORTFOLIO_FRAMEWORK:
      return {
        ...state,
        selectedFramework: action.framework,
        filteredProjects: action.allProjects.filter(
          (p) => p.data.mainTool[1] === action.filter
        ),
      };

    default:
      return state;
  }
};

export default reducer;
