import React from 'react';
import { mount } from 'enzyme';
import AboutMeSection from './about-me-section.component';

describe('about-me section component', () => {
  it('should match its snapshot', () => {
    expect(mount(<AboutMeSection />)).toMatchSnapshot();
  });
});
