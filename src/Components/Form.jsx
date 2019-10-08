import React, { Component } from 'react';
import { Container, Form, ListGroup, ListGroupItem, ButtonGroup, Button } from "reactstrap";

// const requiredValidator = val => val && val.length;


class StudentForm extends Component {
    constructor(params) {
      super(params);
  
      this.state = {

          Name: "",
          Surname: "",
          Email: "",
          DOB: null,

        isLoading: false,
        errMess: null,
        students: [],
        values: null
      };
    }
  
    //   handleChange(values) {
    //     //console.log("CHANGE", values);
    //   }
    //   handleUpdate(form) {
    //     //console.log("UPDATE", form);
    //   }
    handleSubmit = async student => {
       this.setState({
        isLoading: true,
        student: student
      });
   
      try {
        student = {
          Name: this.state.Name,
          Surname: this.state.Surname,
          Email: this.state.Email,
          DOB: this.state.DOB
        }
        var response = await fetch(
            "http://localhost:3000/students",
          {
            method: "POST",
            body: JSON.stringify(student),
            headers: {
              "Content-Type": "application/json"
            }
         
          }
        );

        if (response.ok) {
          //reset the form
          this.setState({
            errMess: null,
            // isLoading: false,
          });
        } else {
          var error = await response.json();
          this.setState({
            errMess: error.message,
            // isLoading: false
          });
        }
      } catch (ex) {
        console.log(ex);
        this.setState({
          errMess: ex.message,
          // isLoading: false
        });
      }
    };

    render() {
      // if (!this.state.errMess) {
      //   this.state.errMess = true;
      // }
      // if (!this.state.errMess.length) {
      //   this.state.errMess = true;
      // } else {
      //   return (
      //     <Alert color="danger">
      //       {" "}
      //       We encountered a problem while processing your request:{" "}
      //       {this.state.errMess}
      //     </Alert>
      //   );
      // }
  
      return (
        <>
        <Container>
          <h3>Add Student</h3>
         <Form >
          <input type="text" value={this.state.Name} onChange={(val) => this.setState({ Name: val.currentTarget.value } )}/>
          <input type="text" value={this.state.Surname} onChange={(val) => this.setState({ Surname: val.currentTarget.value } )}/>
          <input type="email" value={this.state.Email} onChange={(val) => this.setState({ Email: val.currentTarget.value } )}/>
          <input type="date" value={this.state.DOB} onChange={(val) => this.setState({ DOB: val.currentTarget.value } )}/>
          <button style={{}} type='submit' onClick={this.handleSubmit}/>
          </Form>
         
     <hr/>
     <h3>Student List</h3>

       <ListGroup className = "list">
   

       <>
            {this.state.students.map(student => {
              return (
                <div key={student.StudentId}>
                  <ListGroupItem>Id: {student.StudentId}
                 </ListGroupItem>
                 <ListGroupItem>
                 Student: {student.Name} {student.Surname}
                 <ButtonGroup className ="btn-sm">
                  <Button id="bt-styleTwo" onClick={() => this.activateEdit(student.StudentId)}>Edit</Button>
                  <Button id="bt-styleOne" onClick={() => this.activateDelete(student.StudentId)}>Delete</Button>
                 </ButtonGroup>
                 </ListGroupItem>
                </div>
              );
            })}
            </>
          
      </ListGroup>
      </Container>
      </>
      )
      
    }

    // componentDidMount = async () => {
    //   var res = await fetch("http://localhost:3000/students");
    //   var students = await res.json();
    //   this.setState({ students: students });
    // }

    activateDelete  = async id => {
      console.log(id)
      await fetch("http://localhost:3000/students/" + id, {method: "DELETE"});
      var res = await fetch("http://localhost:3000/students");
      var students = await res.json();
      this.setState({ students: students });
     
    }

    activateEdit  = async id => {
      console.log(id)
      await fetch("http://localhost:3000/students/" + id, {method: "PUT"});
    
     
    }

 
  }
  
  export default StudentForm;