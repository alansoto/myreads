import React from 'react';
//import {Route} from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf/Bookshelf';
import Search from './Search/Search';


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount(){
     this.refreshBookshelves();
  }

  refreshBookshelves = () => {
    BooksAPI.getAll().then((books)=>{
      this.setState({books});
   })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book,shelf).then(this.refreshBookshelves);
  }

  render() {
    const emptyBook= {id:'000',title:'loading...', imageLinks:{smallThumbnail:''},authors:['...']};
    const getBooks = (shelf) => (this.state.books.filter((book)=> book.shelf === shelf))

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            {
              this.state.books ?
                (
                  <div className="list-books-content">
                    <Bookshelf bookshelfTitle="Currently Reading" books={getBooks('currentlyReading')} updateBook={this.updateBook}/>
                    <Bookshelf bookshelfTitle="Want to Read" books={getBooks('wantToRead')} updateBook={this.updateBook}/>
                    <Bookshelf bookshelfTitle="Read" books={getBooks('read')} updateBook={this.updateBook}/>
                  </div>
                ):(
                  <Bookshelf bookshelfTitle="Loading..." books={[emptyBook]} updateBook={this.updateBook}/>
                )
            }

            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }


}

export default BooksApp
