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
    BooksAPI.getAll().then((booksArray)=>{
      this.setState({myLibrary:booksArray});
   });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(
          <ListBooks library={this.state.myLibrary}/>
        )}/>
        <Route exact path='/search' component={Search}></Route>
      </div>
    )
  }


}

export default BooksApp
