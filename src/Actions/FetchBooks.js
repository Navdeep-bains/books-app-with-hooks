import { GET_BOOKS, GET_BOOKS_FAILURE, PUT_BOOK,UPDATE_BOOK,DELETE_BOOK } from "./ActionConstants";
import axios from "axios";
export const getBooks = (data) => {
  return {
    type: "GET_BOOKS",
    payload: data,
  };
};

export const deleteBook = (id) => ({
type:"DELETE_BOOK",
id
})


export const putBook = (payload) => ({
  type: "PUT_BOOK",
  payload,
});

export const getBooksFailure = (msg) => {
  return {
    type: "GET_BOOKS_FAILURE",
    msg: msg,
  };
};

export const updateBook = (obj) => ({
  type:"UPDATE_BOOK",
  obj
})


export const displayBooks = (id) => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3000/books")
      .then((response) => {
        const data = response.data;
        //console.log("apiResponse", data);
        dispatch(getBooks(data));
      })
      .catch((err) => {
        // console.log("err",err.message)
        const msg = err.message;
        dispatch(getBooksFailure(msg));
      });
  };
};

// export const putBookCall = (obj) => {
//   return(dispatch) => {
//     fetch("http://localhost:3000/books/"+obj, {
//       method: "Put",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(obj),
//     })
//       .then((result) => result.json())
//       .then((elem) => {
//         dispatch(updateBook(elem));
//         alert("restaurant has updated");
//       });

//   }
// }

