import React from 'react';
import './App.css';
import ListBooks from './ListBooks/ListBooks';


class BooksApp extends React.Component {
  state = {}

  render() {
    return (
      <div className="app">
        <ListBooks/>
      </div>
    )
  }


}

export default BooksApp
