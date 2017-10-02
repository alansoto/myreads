/*
import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Book />, div);
});
*/
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Book from './Book';

Enzyme.configure({adapter: new Adapter()});

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
