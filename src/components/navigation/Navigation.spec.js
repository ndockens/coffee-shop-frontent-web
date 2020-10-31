import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('Navigation', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });

  it('should render a nav element', () => {
    expect(wrapper.find('nav').length).toEqual(1);
  });

  it(`should render a div element with the 'container' class inside the navbar`, () => {
    expect(wrapper.find('nav div.container').length).toEqual(1);
  });
});