import React, { Component } from 'react';
import { Container, Form, ListGroup, ListGroupItem, ButtonGroup, Button, Spinner } from "reactstrap";
import { connect } from "react-redux";
// const requiredValidator = val => val && val.length;

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  errMess: () =>
    dispatch({
      type: "ERR_MSG",
    
    }),
    loading: () => 
    dispatch({
      type: "LOADING",

    })
});

class StudentForm extends Component {
    constructor(params) {
      super(params);
  
      this.state = {

          Name: "",
          Surname: "",
          Email: "",
          DOB: "",


        students: [],
        values: null
      };
    }
  
    handleSubmit = async student => {
      this.props.loading()

       this.setState({
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
        var students = this.state.students
        students.push(student)
        } else {
          var error = await response.json();        
            this.props.errMess(error.message)     
        }
      } catch (ex) {
        console.log(ex); 
         this.props.errMess(ex.message)     
      }
      this.props.loading()
    };

    render() {
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
          {/* <Spinner color="danger"/>  */}
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

    componentDidMount = async () => {
      var res = await fetch("http://localhost:3000/students");
      var students = await res.json();
      this.setState({ students: students });
    }

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
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);