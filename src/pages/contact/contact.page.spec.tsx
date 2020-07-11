import React from 'react';
import { shallow } from 'enzyme';
import ContactPage from './contact.page.component';

describe('contact page', () => {
  it('should match its snapshot', () => {
    expect(shallow(<ContactPage />)).toMatchSnapshot();
  });
});
