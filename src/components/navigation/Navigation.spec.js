import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('Navigation', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });

  it('should render a navbar element', () => {
    expect(wrapper.find('nav').length).toEqual(1);
  });
});