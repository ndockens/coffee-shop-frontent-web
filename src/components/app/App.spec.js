import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Home from '../../pages/home/Home';
import Navigation from '../navigation/Navigation';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it(`should render a div with the 'container' class`, () => {
    expect(wrapper.find('div.container').length).toEqual(1);
  });

  it('should render the Home page', () => {
    expect(wrapper.containsMatchingElement(<Home />)).toEqual(true);
  });

  it('should render the Navigation component', () => {
    expect(wrapper.containsMatchingElement(<Navigation />)).toEqual(true);
  });
});