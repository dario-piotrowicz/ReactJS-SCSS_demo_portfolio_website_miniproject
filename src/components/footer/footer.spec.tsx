import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer.component';

describe('footer component', () => {
  it('should match its snapshot', () => {
    expect(shallow(<Footer />)).toMatchSnapshot();
  });
});
