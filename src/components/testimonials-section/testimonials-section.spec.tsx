import React from 'react';
import { mount } from 'enzyme';
import TestimonialsSection from './testimonials-section.component';

describe('testimonials section component', () => {
  it('should match its snapshot', () => {
    expect(mount(<TestimonialsSection />)).toMatchSnapshot();
  });
});
