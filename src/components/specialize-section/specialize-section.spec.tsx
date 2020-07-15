import React from 'react';
import { mount } from 'enzyme';
import SpecializeSection from './specialize-section.component';

describe('specialize section component', () => {
  it('should match its snapshot', () => {
    expect(mount(<SpecializeSection />)).toMatchSnapshot();
  });
});
