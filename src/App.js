import React from "react";
import ToDoList from "./ToDoList/AddNewTask/AddNewTask";
import ListToDo from "./ToDoList/ListToDo/ListToDo";
import todoReducer from "./reducer/toDoReducer";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <Container className="App">
      <Row className="mainRow">
        <Col className="Row1" xs={6} style={{ padding: "0px" }}>
          <ToDoList />
        </Col>
        <Col className="Row2" xs={6} style={{ padding: "0px" }}>
          <ListToDo />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
