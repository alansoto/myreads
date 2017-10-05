import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Book from './Book';

Enzyme.configure({adapter: new Adapter()});

const testBook = {
  imageLinks:{smallThumbnail:'http'},
  authors:['Shakespeare','Someone Else'],
  shelf: 'myShelf',
  title:'Hamlet'
}

const updateBook = ()=>{console.log('updateBook')}

const testBookComponent = <Book book={testBook} updateBook={updateBook}/>

describe('Book Component',()=>{

  it('renders without crashing', () => {
    const wrapper = shallow(testBookComponent);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders backgroundCover coming from props',()=>{

    const wrapper = shallow(testBookComponent)
    expect(wrapper.find('.book-cover').get(0).props.style.backgroundImage).toBe('url(http)')
  })

  it('renders bookTitle coming from props',()=>{
    const wrapper = shallow(testBookComponent)
    expect(wrapper.find('.book-title').text()).toBe('Hamlet')
  })

  it('renders bookAuthors coming from props',()=>{
    const wrapper = shallow(testBookComponent)
    expect(wrapper.find('.book-authors').text()).toBe('Shakespeare, Someone Else')
  })

  it('renders currentBookshelf coming from props',()=>{
    const wrapper = shallow(testBookComponent)
    expect(wrapper.find('.book-shelf-changer select').get(0).props.defaultValue).toBe('myShelf');
  })

})
