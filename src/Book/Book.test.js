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
  const wrapper = shallow(<Book />);
  expect(wrapper).toMatchSnapshot();
});

it('has an image property',()=>{
  const wrapper = shallow(<Book bookCover='http'/>)
  
  expect(wrapper.prop('bookCover')).toContain('http');
})
