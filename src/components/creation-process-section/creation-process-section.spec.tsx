import React from 'react';
import { mount } from 'enzyme';
import CreationProcessSection from './creation-process-section.component';

describe('creation-process section component', () => {
  it('should match its snapshot', () => {
    expect(mount(<CreationProcessSection />)).toMatchSnapshot();
  });
});
