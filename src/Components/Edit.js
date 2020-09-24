import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { displayBooks, getBooksFailure } from "../Actions/FetchBooks";
import { useHistory } from "react-router-dom";
// import { putBookCall } from '../Actions/FetchBooks';
import { updateBook } from '../Actions/FetchBooks'
const Edit = ({ put_book, updateBook ,displayBooks,books }) => {
  if (put_book && put_book.title) {
    var reduxTitle = put_book.title;
  } else {
    var reduxTitle = "";
  }
  if (put_book && put_book.author) {
    var reduxAuthor = put_book.author;
  } else {
    var reduxAuthor = "";
  }
  const [title, setTitle] = useState(reduxTitle);
  const [author, setAuthor] = useState(reduxAuthor);
const history = useHistory();
  const params = useParams();
  // console.log(params.id);
  // console.log("his",history);
  const UpdateData = (e) => {
    e.preventDefault();
    const update_book = Object.assign(put_book,{
      title:title,
      author:author
    })
    // Object.assign(target,source)method use to create object and copies the properties and 
    // values from  object in new object
    //console.log("hi",update_book)
    // console.log(id)
    updateBook(update_book);
    // putBookCall(params.id)
    // alert("done check redux state")
    history.push("/")
  };
  // console.log("put_book", put_book);console.log("put_book",books );


  return (
    <React.Fragment>
      <div className="container">
        <form onSubmit={(e) => {
              UpdateData(e);
            }}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              className="form-control"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <Button
            color="info"
          >
            Update
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  books: state.BooksList.booksList,
  put_book: state.BooksList.put_book,
});
const mapDispatchToProps = (dispatch) => ({
updateBook:(update_book)=>{dispatch(updateBook(update_book))},
  // putBookCall:(id)=>{dispatch(putBookCall(id))}
})
export default connect(mapStateToProps,mapDispatchToProps)(Edit);
