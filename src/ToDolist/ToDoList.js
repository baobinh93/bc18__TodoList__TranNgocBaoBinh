import React, { Component } from "react";
import TaskToDo from "./Components/TaskToDo";
import TaskCompleted from "./Components/TaskCompleted";
import InputAddTask from "./Components/InputAddTask";
import { Container, Heading } from "./JSS";
export default class ToDoList extends Component {
  render() {
    return (
      <Container className="container" style={{ width: "50%" }}>
        <Heading className="h1"> To Do List </Heading>
        <InputAddTask />
        <TaskToDo />
        <TaskCompleted />
      </Container>
    );
  }
}
