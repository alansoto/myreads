import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import ListBooks from './ListBooks/ListBooks';
import Search from './Search/Search';
import * as BooksAPI from './BooksAPI';


class BooksApp extends React.Component {
  state = {myLibrary:[]}

  componentDidMount(){
     this.refreshLibrary();
  }

  refreshLibrary = () => {
    console.log('refresh library');
    BooksAPI.getAll().then(
      (booksArray) => this.setState({myLibrary:booksArray})
    );
  }

  updateBook = (book, shelf) =>  BooksAPI.update(book,shelf).then(this.refreshLibrary);


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(
          <ListBooks library={this.state.myLibrary} onUpdate={this.updateBook} />
        )}/>
        <Route exact path='/search' render={()=>(
          <Search library={this.state.myLibrary} onUpdate={this.updateBook} />
        )} />
      </div>
    )
  }


}

export default BooksApp
