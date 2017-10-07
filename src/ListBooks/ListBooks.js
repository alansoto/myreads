import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import Bookshelf from './../Bookshelf/Bookshelf';

class ListBooks extends Component {
  static propTypes = {
      library: PropTypes.array.isRequired,
      onUpdate: PropTypes.func.isRequired
  }

  render(){
    const {library, onUpdate} = this.props;

    const emptyBook= {id:'000',title:'loading...', imageLinks:{smallThumbnail:''},authors:['...']};
    const filterBooks = (shelf) => (library.filter((book)=> book.shelf === shelf))

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {
          library.length > 0 ?
            (
              <div className="list-books-content">
                <Bookshelf bookshelfTitle="Currently Reading" books={filterBooks('currentlyReading')} updateBook={onUpdate}/>
                <Bookshelf bookshelfTitle="Want to Read" books={filterBooks('wantToRead')} updateBook={onUpdate}/>
                <Bookshelf bookshelfTitle="Read" books={filterBooks('read')} updateBook={onUpdate}/>
              </div>
            ):(
              <Bookshelf bookshelfTitle="Loading..." books={[emptyBook]} updateBook={onUpdate}/>
            )
        }

        <div className="open-search">
          <Link to="/search">Add a Book</Link>
        </div>
      </div>

    );
  }
}

export default ListBooks;
