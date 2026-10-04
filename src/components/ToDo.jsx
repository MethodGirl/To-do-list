import AddTaskFrom from "./AddTaskFrom"
import SearchTaskForm from "./SearchTaskForm"
import ToDoInfo from "./ToDoInfo"
import ToDoList from "./ToDoList"

const ToDo = () => {
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskFrom />
      <SearchTaskForm />
      <ToDoInfo />
      <ToDoList />
    </div>
  );
};

export default ToDo;
