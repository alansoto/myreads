import React, {Component} from 'react';
import Bookshelf from './../Bookshelf/Bookshelf';
import * as BooksAPI from './../BooksAPI';


class ListBooks extends Component {
  state = {}

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

  render(){
    const emptyBook= {id:'000',title:'loading...', imageLinks:{smallThumbnail:''},authors:['...']};
    const filterBooks = (shelf) => (this.state.books.filter((book)=> book.shelf === shelf))

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {
          this.state.books ?
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
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>

    );
  }
}

export default ListBooks;
