import { ADD_TODO,DELETE_TODO,EDIT_TODO } from "../Actions/ActionConstants";

const initialState = {
  todoArr: [
  ],
  todo:null,
  show:false
};

const Todo = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoArr: [...state.todoArr,action.payload],
      };
      break;
      case "DELETE_TODO":
      return{
        ...state,
        todoArr:state.todoArr.filter( (items,id) => id != action.id )
      };
      break;
      case "EDIT_TODO":
      return {
        ...state,
        todoArr:state.todoArr.map((items,id) => id == action.payload.id ? action.payload : items),
        show:!false
      }
    default:
      return state;
  }
};

export default Todo;
