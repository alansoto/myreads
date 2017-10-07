import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Book from './../Book/Book';
import * as BooksAPI from './../BooksAPI';


class Search extends Component {

  state = {searchResults:[]}

  static propTypes = {
      library: PropTypes.array.isRequired,
      onUpdate: PropTypes.func.isRequired
  }

  /*
    NOTES: The search from BooksAPI is limited to a particular set of search terms.
    You can find these search terms here:
    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
    you don't find a specific author or title. Every search is limited by search terms.
  */
  inputSearch_onChange  = (e) => {
    const query = e.target.value;
    BooksAPI.search(query,20).then(
      (response) => {response.error ? this.setState({searchResults:[]}) : this.setState({searchResults:response})}
    );
  }

  render(){
    const searchResults = this.state.searchResults;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.inputSearch_onChange}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              searchResults.length ? (
                searchResults.map((book)=>(<Book book={book} key={book.id} onUpdate={this.props.onUpdate}/>))
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
