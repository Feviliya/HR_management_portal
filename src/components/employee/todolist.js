import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import '../../assets/css-components/employeecss/todolist.css'

class ToDo extends Component {
    constructor(props) {
        super(props);
  
        // Setting up state
        this.state = {
            userInput: "",
            list: [],
        };
    }
  
    // Set a user input value
    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }
  
    // Add item if user input in not empty
    addItem() {
        if (this.state.userInput !== "") {
            const userInput = {
                id: Math.random(),
                value: this.state.userInput,
            };
            const list = [...this.state.list];
            list.push(userInput);
            this.setState({
                list,
                userInput: "",
            });
        }
    }
    deleteItem(key) {
        const list = [...this.state.list];
        const updateList = list.filter((item) => item.id !== key);
        this.setState({
            list: updateList,
        });
    }
  
    editItem = (index) => {
      const todos = [...this.state.list];
      const editedTodo = prompt('Edit the todo:');
      if (editedTodo !== null && editedTodo.trim() !== '') {
        let updatedTodos = [...todos]
        updatedTodos[index].value= editedTodo
        this.setState({
          list: updatedTodos,
      });
      }
    }
  
    render() {
        return (
            <Container className="todo-box cont">
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "1.4rem",
                    }}
                >
                    TODO LIST
                </Row>
  
                <hr />
                <Row>
                    <Col md={{ span: 20 }}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="add task . . . "
                                value={this.state.userInput}
                                onChange={(item) =>
                                    this.updateInput(item.target.value)
                                }
                                aria-label="add something"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup>
                                <Button
                                    variant="dark"
                                    className="mt-2"
                                    onClick={() => this.addItem()}
                                >
                                    ADD
                                </Button>
                            </InputGroup>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <ListGroup className="list-items" md={{ span: 10}}>
                            {this.state.list.map((item, index) => {
                                return (
                                  <div key = {index} className="ans-list"> 
                                    <ListGroup.Item className="items"
                                        variant="dark"
                                        action
                                        style={{
                                      }}
                                    >
                                        {item.value}
                                    </ListGroup.Item>
                                    <span>
                                        <Button 
                                        variant = "light"
                                        onClick={() => this.deleteItem(item.id)}>
                                            Delete
                                        </Button>
                                        <Button variant = "light"
                                        onClick={() => this.editItem(index)}>
                                            Edit
                                        </Button>
                                    </span>
                                  </div>
                                );
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default ToDo