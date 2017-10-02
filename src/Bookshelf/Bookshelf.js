import React, {Component} from 'react';
import Book from './../Book/Book';

class Bookshelf extends Component {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
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
