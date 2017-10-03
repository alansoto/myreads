import React, {Component} from 'react';
import Book from './../Book/Book';
import PropTypes from 'prop-types';

class Bookshelf extends Component {
  static propTypes = {
    bookshelfTitle: PropTypes.string
  }

  render() {
    const {bookshelfTitle} = this.props;

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{bookshelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <Book/>
              <Book/>
              <Book/>

            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
