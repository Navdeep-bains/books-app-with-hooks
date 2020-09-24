import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addTodo } from "../Actions/TodoAction";
import { Table } from "reactstrap";
import { deleteTodo, editTodo } from "../Actions/TodoAction";
const Todo = ({ todoList, addTheTodo, deleteTodo, editTodo, show }) => {
  //   if (obj.name) {
  //    var vaL = obj.name;
  // }
  const [item, setItem] = useState("");
  const [temp, setTemp] = useState("");

  //const [todoItem, setTodoItem] = useState(vaL);
  const MyList = todoList.map((items, index) => (
    <li key={index}>
      {items.name}
      {/* {show  ? <input type = "text" placeholder="enter Text" /> : "" } */}
      <button
        className="btn btn-warning ml-5 mt-3"
        onClick={() => {
          editItem(items, index);
        }}
      >
        Edit
      </button>

      <button
        className="btn btn-danger ml-5 mt-3"
        onClick={() => {
          deleteItem(index);
        }}
      >
        Delete
      </button>
    </li>
  ));

  const setTheItem = (e) => {
    let obj = {
      name: e.target.value,
    };
    setTemp(obj);
    setItem(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTheTodo(temp);
    console.log(item);
    setItem("");
  };

  const deleteItem = (id) => {
    alert(id);
    deleteTodo(id);
  };

  const editItem = (obj, id) => {
    //alert(`edit ${obj.name} ${id}`)
    console.log("hello", obj.name);
    editTodo(obj);
  };
  return (
    <React.Fragment>
      <div className="container">
        <input
          type="text"
          placeholder="write here"
          onChange={(e) => {
            setTheItem(e);
          }}
          value={item}
        />
        <button
          className="btn btn-primary"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Add..
        </button>
      </div>
      <div className="text-center">
        <ul>
          {MyList}
{ show ? (
      <input type="text" placeholder="enter Text"  />
    ) : (
      ""
    )}
        </ul>
      </div>
    </React.Fragment>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTheTodo: (todo) => {
      dispatch(addTodo(todo));
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
    editTodo: (obj) => {
      dispatch(editTodo(obj));
    },
  };
};
const mapStateToProps = (state) => {
  console.log("todo", state);
  return {
    todoList: state.Todo.todoArr,
    show: state.Todo.show,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
