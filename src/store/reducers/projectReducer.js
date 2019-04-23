const initState = {
  projects: [
    { id: "1", title: "help me find bangalore", content: "dfgdfg" },
    { id: "2", title: "help me find bloodhound", content: "dfgdfg" },
    { id: "3", title: "help me find patchfinder", content: "dfgdfg" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
