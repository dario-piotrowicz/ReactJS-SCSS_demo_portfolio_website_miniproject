import React from 'react';
import { mount } from 'enzyme';
import GallerySection from './gallery-section.component';

describe('gallery section component', () => {
  it('should match its snapshot', () => {
    expect(mount(<GallerySection />)).toMatchSnapshot();
  });
});
