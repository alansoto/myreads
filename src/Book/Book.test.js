import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Book from './Book';

Enzyme.configure({adapter: new Adapter()});

describe('Book Component',()=>{
  it('renders without crashing', () => {
    const wrapper = shallow(<Book/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders backgroundCover coming from props',()=>{
    const wrapper = shallow(<Book backgroundCover='http'/>)
    expect(wrapper.find('.book-cover').get(0).props.style.backgroundImage).toBe('url(http)')
  })

  it('renders bookTitle coming from props',()=>{
    const wrapper = shallow(<Book bookTitle='Hamlet'/>)
    expect(wrapper.find('.book-title').text()).toBe('Hamlet')
  })

  it('renders bookAuthors coming from props',()=>{
    const wrapper = shallow(<Book bookAuthors={['Shakespeare','Someone Else']}/>)
    expect(wrapper.find('.book-authors').text()).toBe('Shakespeare, Someone Else')
  })

  it('renders currentBookshelf coming from props',()=>{
    const wrapper = shallow(<Book bookshelf='test-bookshelf'/>)
    expect(wrapper.find('.book-shelf-changer select').get(0).props.value).toBe('test-bookshelf')
  })

})
