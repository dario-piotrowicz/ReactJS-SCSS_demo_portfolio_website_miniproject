import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from './page-not-found.page.component';

describe('page-not-found page', () => {
  it('should match its snapshot', () => {
    expect(shallow(<PageNotFound />)).toMatchSnapshot();
  });
});
