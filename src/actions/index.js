  export const handleStudents = () => {
    return async (dispatch, getState) => {
        var res = await fetch("http://localhost:3000/students");
        var students = await res.json();
        var allStudents = students
        for (var i = 0; i < allStudents.length; i++) {
            allStudents[i].projects = await getProjects(allStudents[i].StudentId)
        }
      dispatch({
        type: "STUDENTS",
        payload: allStudents
      });
    };
  };
  
  const getProjects = async id => {
    var res = await fetch("http://localhost:3000/students/" + id + "/projects");
    var projects = await res.json();
    return projects
}


// export const handleError = () => {
//     return async (dispatch, getState) => {
//       //do async code here
//       dispatch({
//         type: "ERR_MSG", 
//       });
//     };
//   };

//   export const handleLoading = () => {
//     return async (dispatch, getState) => {
//       //do async code here
//       dispatch({
//         type: "LOADING",
//       });
//     };
//   };
  