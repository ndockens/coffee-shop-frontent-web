import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import ImageCarousel from '../../components/image-carousel/ImageCarousel';

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('should render a div', () => {
    expect(wrapper.find('div').length).toBeGreaterThanOrEqual(1);
  });

  it('should render the ImageCarousel component', () => {
    expect(wrapper.containsMatchingElement(<ImageCarousel />)).toEqual(true);
  });
});