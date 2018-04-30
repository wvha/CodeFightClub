import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import TimesUp from '../components/timesUp.jsx';

Enzyme.configure({ adapter: new Adapter() });

test('timesUp should contain \'GAME OVER \'', () => {
  const component = shallow(<TimesUp changeView={() => {}}/>);
  expect(component.contains('GAME OVER')).toBe(true);
})

test('timesUp should contain \'PLAY AGAIN \'', () => {
  const component = shallow(<TimesUp changeView={() => {}}/>);
  expect(component.contains('PLAY AGAIN')).toBe(true);
})

test('timesUp should render properly', () => {
  const component = toJson(shallow(<TimesUp changeView={() => {}}/>));
  expect(component).toMatchSnapshot();
})