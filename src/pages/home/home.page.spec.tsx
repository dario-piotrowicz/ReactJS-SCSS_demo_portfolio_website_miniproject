import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './home.page.component';

describe('home page', () => {
  it('should match its snapshot', () => {
    expect(shallow(<HomePage />)).toMatchSnapshot();
  });
});
