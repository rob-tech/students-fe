// import React, { Component } from "react";
// import { ListGroup, ListGroupItem } from "reactstrap";


// class Students extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       students: []
//     };
//   }
  
//   render() {
//     return (
//       <>
//         <ListGroup>
//           {this.state.students.map(student => {
//             return (
//               <div key={student.StudentId}>
//                 <ListGroupItem>{student.Name}</ListGroupItem>
//               </div>
//             );
//           })}
//         </ListGroup>
//       </>
//     );
//   }

//   componentDidMount = async () => {
//     var res = await fetch("http://localhost:3000/students");
//     var students = await res.json();
//     this.setState({ students: students });
//   };
// }

// export default Students;
