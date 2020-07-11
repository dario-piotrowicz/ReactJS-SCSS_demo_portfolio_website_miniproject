import React from 'react';
import { shallow } from 'enzyme';
import Header from './header.component';
import routeData from 'react-router';

const baseMockLocation = {
  pathname: '',
  hash: '',
  search: '',
  state: '',
};

describe('header component', () => {
  it('should match its snapshot (in home)', () => {
    const mockLocation = { ...baseMockLocation, pathname: '/' };
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);

    expect(shallow(<Header />)).toMatchSnapshot();
  });

  it('should match its snapshot (in non-home pages)', () => {
    const mockLocation = { ...baseMockLocation, pathname: '/about' };
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);

    expect(shallow(<Header />)).toMatchSnapshot();
  });

  it('should show its content in home', () => {
    const mockLocation = { ...baseMockLocation, pathname: '/' };
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);

    const header = shallow(<Header />);
    const content = header.find('.content');

    expect(content.hasClass('hidden')).toBe(false);
  });

  it('should not show its content in non-home pages', () => {
    const mockLocation = { ...baseMockLocation, pathname: '/work' };
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);

    const header = shallow(<Header />);
    const content = header.find('.content');

    expect(content.hasClass('hidden')).toBe(true);
  });
});
