import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table } from "reactstrap";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { putBook,deleteBook } from "../Actions/FetchBooks";
// import { useDispatch } from "react-redux";
import { displayBooks, getBooksFailure } from "../Actions/FetchBooks";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import  { fetchBooks } from "../Actions/FetchBooks";
const Booklist = ({
  books,
  displayBooks,
  getBooksFailure,
  putBook,
  putTheBook,
  deleteTheBook
}) => {
  const history = useHistory();

  // const dispatch = useDispatch();
  const editData = (books, id) => {
    //  alert(id);
    putBook(books);
    history.push(`/edit/${id}`);
  };
  const deleteBook = (id) => {
    alert("book dlt");
    deleteTheBook(id)
  };
  useEffect(() => {
    displayBooks();
    getBooksFailure();
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <Table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Title</th>
              <th>Author</th>
              <th>Actions</th>
              <th>
                <Button className="primary">click</Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {books.length &&
              books.map((books, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{books.title}</td>
                  <td>{books.author}</td>
                  <td>
                    <Button className="ml-3" color="info">
                      View
                    </Button>
                    <Button
                      onClick={(e) => {
                        editData(books, index);
                      }}
                      className="ml-3"
                      color="primary"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={(e) => {
                        deleteBook(index);
                      }}
                      className="ml-3"
                      color="danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </React.Fragment>
  );
};

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {
//       displayBooks,
//       getBooksFailure,
//       putBook,
//     },
//     dispatch
//   );
// }
const mapDispatchToProps = (dispatch) => ({
  displayBooks: () => {
    dispatch(displayBooks());
  },
  getBooksFailure: () => {
    dispatch(getBooksFailure());
  },
  putBook: (book) => {
    dispatch(putBook(book));
  },
  deleteTheBook: (id) => {
    dispatch(deleteBook(id));
  },
});
const mapStateToProps = (state) => {
  console.log(state);
  return {
    books: state.BooksList.booksList,
    putTheBook: state.BooksList.put_book,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
