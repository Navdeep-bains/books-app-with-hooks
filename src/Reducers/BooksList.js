import {
  GET_BOOKS,
  GET_BOOKS_FAILURE,
  PUT_BOOK,
} from "../Actions/ActionConstants";

const initialState = {
  booksList: [],
  msg: "",
  put_book: null,
};
const BooksList = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOOKS":
      return {
        ...state,
        booksList: action.payload,
      };
    case "GET_BOOKS_FAILURE":
      return {
        ...state,
        msg: action.msg,
      };
    case "PUT_BOOK":
      return {
        ...state,
        put_book: action.payload,
      };
    case "UPDATE_BOOK":
      return {
        ...state,
        booksList: state.booksList.map((items) =>
          items.id == action.obj.id ? action.obj : items
        ),
      };
    case "DELETE_BOOK":
      return {
        ...state,
        booksList: state.booksList.filter((items,index) => index != action.id ),
      };
    default:
      return state;
  }
};
export default BooksList;
// case "GET_BOOK":
// let arr = state.booksList.filter((item) =>  item.id == action.id);
// arr = arr.values();
// for(let val of arr){
//   arr = val;
// }
// return{
//   ...state,
//   book:arr
// }
