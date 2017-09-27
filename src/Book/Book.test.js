import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Book from './Book'


Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<Book/>);
})
