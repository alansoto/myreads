import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import ListBooks from './ListBooks/ListBooks';
import Search from './Search/Search';


class BooksApp extends React.Component {
  state = {}

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={ListBooks}></Route>
        <Route exact path='/search' component={Search}></Route>
      </div>
    )
  }


}

export default BooksApp
