import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import Bookshelf from './../Bookshelf/Bookshelf';
import * as BooksAPI from './../BooksAPI';


class ListBooks extends Component {
  state = {}

  static propTypes = {
      library: PropTypes.array.isRequired
  }



  updateBook = (book, shelf) => {
    BooksAPI.update(book,shelf).then(this.refreshBookshelves);
  }

  render(){
    const emptyBook= {id:'000',title:'loading...', imageLinks:{smallThumbnail:''},authors:['...']};
    const filterBooks = (shelf) => (this.props.library.filter((book)=> book.shelf === shelf))

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {
          this.props.library.length > 0 ?
            (
              <div className="list-books-content">
                <Bookshelf bookshelfTitle="Currently Reading" books={filterBooks('currentlyReading')} updateBook={this.updateBook}/>
                <Bookshelf bookshelfTitle="Want to Read" books={filterBooks('wantToRead')} updateBook={this.updateBook}/>
                <Bookshelf bookshelfTitle="Read" books={filterBooks('read')} updateBook={this.updateBook}/>
              </div>
            ):(
              <Bookshelf bookshelfTitle="Loading..." books={[emptyBook]} updateBook={this.updateBook}/>
            )
        }

        <div className="open-search">
          <Link to="/search">
            Add a Book
          </Link>

        </div>
      </div>

    );
  }
}

export default ListBooks;
