import React, {Component} from 'react';
import Book from './../Book/Book';
import PropTypes from 'prop-types';

class Bookshelf extends Component {
  static propTypes = {
    bookshelfTitle: PropTypes.string,
    books: PropTypes.array,
    onUpdate: PropTypes.func.isRequired
  }

  render() {
    const {bookshelfTitle, books,onUpdate} = this.props;

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{bookshelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              { books && books.map( (book)=>(
                <Book book={book} key={book.id} onUpdate={onUpdate} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
