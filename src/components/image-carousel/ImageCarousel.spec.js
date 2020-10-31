import React from 'react';
import { shallow } from 'enzyme';
import ImageCarousel from './ImageCarousel';

describe('ImageCarousel', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ImageCarousel />);
  });

  it(`should render a div with the following classes: 'carousel', 'slide'`, () => {
    expect(wrapper.find('div.carousel.slide').length).toEqual(1);
  });
});