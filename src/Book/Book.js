import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
      book: PropTypes.object,
      onUpdate: PropTypes.func.isRequired

  }

  selectShelf_onChange = (e) =>{
    e.preventDefault();
    const book = this.props.book;
    e.target.value !== book.shelf && this.props.onUpdate(this.props.book, e.target.value);
  }

  render(){
    const book = this.props.book;
    const smallThumbnail = book.imageLinks.smallThumbnail;
    const title = book.title;
    const authors = book.authors ? book.authors.join(', ') : '';
    const shelf = book.shelf ? book.shelf :'none';

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${smallThumbnail})` }}></div>

            <div className="book-shelf-changer">
              <select defaultValue={shelf} onChange={this.selectShelf_onChange}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>

          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
      	</div>
      </li>
    );
  }
}

export default Book;
