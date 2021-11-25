import React, { useState, useEffect } from "react";
import "./ListToDo.css";
import { Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ListToDo() {
  return (
    <div className="ListToDo">
      <div className="container">
        <h3 className="title">To Do List</h3>
        <input
          className="Search form-control "
          type="text"
          placeholder=" Search ..."
        />
      </div>
    </div>
  );
}

export default ListToDo;
