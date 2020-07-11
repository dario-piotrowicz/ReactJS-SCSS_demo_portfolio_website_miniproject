import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from './about.page.component';

describe('contact page', () => {
  it('should match its snapshot', () => {
    expect(shallow(<AboutPage />)).toMatchSnapshot();
  });
});
