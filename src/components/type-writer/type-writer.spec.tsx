import React from 'react';
import { mount } from 'enzyme';
import TypeWriter from './type-writer.component';

describe('testimonials section component', () => {
  it('should match its snapshot', () => {
    const params = {
      leadingFixedText: 'I am ',
      waitTime: 1000,
      phrases: ['a test'],
    };
    expect(mount(<TypeWriter {...params} />)).toMatchSnapshot();
  });
});
