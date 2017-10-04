import React, {Component} from 'react';
import Book from './../Book/Book';
import PropTypes from 'prop-types';

class Bookshelf extends Component {
  static propTypes = {
    bookshelfTitle: PropTypes.string,
    books: PropTypes.array
  }

  render() {
    const {bookshelfTitle, books} = this.props;

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{bookshelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              { books && books.map( (book)=>(
                <Book bookTitle={book.title} backgroundCover={book.imageLinks.smallThumbnail}  bookAuthors={book.authors[0]} bookshelf={book.shelf} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
