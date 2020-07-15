import React from 'react';
import { mount } from 'enzyme';
import StatsSection from './stats-section.component';

describe('stats section component', () => {
  it('should match its snapshot', () => {
    expect(mount(<StatsSection />)).toMatchSnapshot();
  });
});
