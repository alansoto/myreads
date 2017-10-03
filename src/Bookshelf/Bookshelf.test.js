import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Bookshelf from './Bookshelf';

Enzyme.configure({adapter: new Adapter()});

describe('Bookshelf component',()=>{
  it('renders without crashing', () => {
    const wrapper = shallow(<Bookshelf/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders bookshelfTitle from props',()=>{
    const wrapper = shallow(<Bookshelf bookshelfTitle='My title'/>);
    expect(wrapper.find('.bookshelf-title').text()).toBe('My title');
  });
});
