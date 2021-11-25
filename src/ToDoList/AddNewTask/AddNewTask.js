import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import moment from "moment";
import "antd/dist/antd.css";
import { Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddNewTask.css";

function ToDo() {
  const [dataTask, setData] = useState({
    newtask: "",
    description: "",
    duedate: "",
    piority: "",
  });

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  console.log(today.toDateString());
  console.log(yesterday.toDateString());

  function disabledDate(current) {
    // Can not select days before today and today
    return yesterday && current < moment().endOf("day");
  }

  const onChangeTask = (value) => {
    setData({ ...dataTask, [value.target.name]: value.target.value });
  };

  const onChangeText = (value) => {
    setData({ ...dataTask, [value.target.name]: value.target.value });
  };

  const onChange = (date, dateString) => {
    console.log(date);
    console.log(date.toString());
    console.log(dateString);
    // setData({ ...dataTask, [value.target.name]: dateString.target.value });
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setData({ ...dataTask, [value.target.name]: value.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data task created", dataTask);
    localStorage.setItem("Data", JSON.stringify(dataTask));
  };

  return (
    <div className="AddNewTask">
      <div className="container">
        <h3 className="title">New Task</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="newtask"
            className="newTask form-control "
            type="text"
            placeholder=" Add new task ..."
            onChange={onChangeTask}
          />
          <h6>Description</h6>
          <textarea
            name="description"
            class="form-control "
            rows="5"
            id="description"
            placeholder=" "
            onChange={onChangeText}
          ></textarea>
          <Row className="select">
            <Col>
              <h6>Due Date</h6>
              <Space direction="vertical">
                <DatePicker
                  format="YYYY-MM-DD "
                  disabledDate={disabledDate}
                  name="duedate"
                  onChange={onChange}
                  defaultValue={moment(today)}
                  placeholder={moment(today)}
                  allowClear={false}
                />
              </Space>
            </Col>
            <Col>
              <div className="piority">
                <h6>Piority</h6>
                <Form.Select
                  defaultValue="Normal"
                  id="selList"
                  name="piority"
                  onChange={handleChange}
                  size="sm"
                >
                  <option value="Low">Low</option>
                  <option value="Normal">Normal</option>
                  <option value="High">High</option>
                </Form.Select>
              </div>
            </Col>
          </Row>
          <Button id="addButton" type="submit">
            Add
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ToDo;
