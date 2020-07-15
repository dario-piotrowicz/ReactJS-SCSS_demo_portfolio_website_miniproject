import React from 'react';
import { mount } from 'enzyme';
import ProgressBarsSection from './progress-bars-section.component';

describe('progress-bars section component', () => {
  it('should match its snapshot', () => {
    expect(mount(<ProgressBarsSection />)).toMatchSnapshot();
  });
});
