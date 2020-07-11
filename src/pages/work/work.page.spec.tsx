import React from 'react';
import { shallow } from 'enzyme';
import WorkPage from './work.page.component';

describe('work page', () => {
  it('should match its snapshot', () => {
    expect(shallow(<WorkPage />)).toMatchSnapshot();
  });
});
