import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import Book from './../Book/Book';
import * as BooksAPI from './../BooksAPI';


class Search extends Component {

  state = {books:[]}

  search_onChange  = (e) => {
    e.preventDefault();
    const query = e.target.value;
    BooksAPI.search(query,20).then(
      (response) => {response.error ? this.setState({books:[]}) : this.setState({books:response})}
    );
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book,shelf).then(this.renderConfirmationSuccess);
  }

  renderConfirmationSuccess = (e) => {alert('Book updated')}

  render(){
    //const emptyBook= {id:'000',title:'loading...', imageLinks:{smallThumbnail:''},authors:['...']};
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.search_onChange}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.books.length ? (
                this.state.books.map((book)=>(
                  <Book book={book} key={book.id} updateBook={this.updateBook}/>)
                )
              )
              :(<p>No results found</p>)
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;

/*
  NOTES: The search from BooksAPI is limited to a particular set of search terms.
  You can find these search terms here:
  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
  you don't find a specific author or title. Every search is limited by search terms.
*/
