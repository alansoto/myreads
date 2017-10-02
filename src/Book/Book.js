import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
      backgroundCover: PropTypes.string,
      bookTitle: PropTypes.string,
      bookAuthors: PropTypes.string,
      bookshelf: PropTypes.string
  }

  render(){
    const {backgroundCover, bookTitle, bookAuthors, bookshelf} = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${backgroundCover})` }}></div>
            <div className="book-shelf-changer">
              <select value={bookshelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{bookTitle}</div>
          <div className="book-authors">{bookAuthors}</div>
      	</div>
      </li>
    );
  }
}

export default Book;
